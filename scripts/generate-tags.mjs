#!/usr/bin/env node

/**
 * Generate tags for icons using AI
 * Fills in tags for icons that don't have 10 tags yet
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createGroq } from '@ai-sdk/groq';
import { generateText } from 'ai';
import dotenv from 'dotenv';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');

// Load environment variables from project root
dotenv.config({ path: path.join(PROJECT_ROOT, '.env') });

const ICONS_DIR = path.join(PROJECT_ROOT, 'icons');
const TAGS_FILE = path.join(PROJECT_ROOT, 'tags.json');

console.log('🏷️  Generating tags using AI...\n');

// Read existing tags
const tagsData = JSON.parse(fs.readFileSync(TAGS_FILE, 'utf-8'));

// Get all icon names
const iconFiles = fs.readdirSync(ICONS_DIR).filter(f => f.endsWith('.svg'));
const iconNames = iconFiles.map(f => f.replace('.svg', ''));

// Find icons that need more tags (less than 10)
const iconsNeedingTags = iconNames.filter(name => {
  const tags = tagsData[name] || [];
  return tags.length < 10;
});

console.log(`Found ${iconsNeedingTags.length} icons that need more tags (out of ${iconNames.length} total)\n`);

if (iconsNeedingTags.length === 0) {
  console.log('✅ All icons already have 10+ tags!');
  process.exit(0);
}

// Configure Groq
const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY || '',
});

if (!process.env.GROQ_API_KEY) {
  console.error('❌ GROQ_API_KEY not found in .env file');
  process.exit(1);
}

// Process icons in batches of 50
const BATCH_SIZE = 50;
let totalUpdated = 0;

for (let i = 0; i < iconsNeedingTags.length; i += BATCH_SIZE) {
  const batch = iconsNeedingTags.slice(i, i + BATCH_SIZE);
  console.log(`Processing batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(iconsNeedingTags.length / BATCH_SIZE)}...`);

  // Build prompt with current tags for context
  const batchInfo = batch.map(name => {
    const existingTags = tagsData[name] || [];
    return `${name} (existing: [${existingTags.slice(0, 3).join(', ')}${existingTags.length > 3 ? '...' : ''}])`;
  }).join('\n');

  const prompt = `You are an icon tagging expert. Generate 10-12 relevant tags for each icon name.

Icon names to tag:
${batchInfo}

Return ONLY a valid JSON object with this exact format:
{
  "tags": {
    "icon-name-1": ["tag1", "tag2", "tag3", ...],
    "icon-name-2": ["tag1", "tag2", "tag3", ...]
  }
}

Tagging rules:
1. Include the icon name itself as a tag (lowercase, with hyphens replaced by spaces)
2. Add synonyms and related terms
3. Include category terms (e.g., "ui", "arrows", "media", "weather", etc.)
4. Add action verbs where applicable (e.g., "upload", "download", "send", "receive")
5. Include emotional states for face icons (e.g., "happy", "sad", "angry")
6. Use lowercase for all tags
7. Use hyphens for multi-word tags (e.g., "check-circle", "user-settings")
8. Return exactly 10-12 tags per icon
9. The JSON must be valid and complete

Return ONLY the JSON, no other text.`;

  try {
    const result = await generateText({
      model: groq('openai/gpt-oss-120b'),
      prompt: prompt,
      temperature: 0.3,
      maxTokens: 8000,
    });

    // Parse the AI response
    let jsonMatch = result.text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      const data = JSON.parse(jsonMatch[0]);

      // Update tagsData with new tags
      for (const [iconName, newTags] of Object.entries(data.tags || {})) {
        if (iconNames.includes(iconName)) {
          // Merge with existing tags, avoiding duplicates
          const existingTags = tagsData[iconName] || [];
          const allTags = [...new Set([...existingTags, ...newTags])];
          tagsData[iconName] = allTags.slice(0, 12); // Max 12 tags
          totalUpdated++;
        }
      }
    }

    // Save progress after each batch
    fs.writeFileSync(TAGS_FILE, JSON.stringify(tagsData, null, 2));

  } catch (err) {
    console.error(`   Error processing batch: ${err.message}`);
  }
}

console.log(`\n✅ Updated tags for ${totalUpdated} icons!`);
console.log(`   Saved to: ${TAGS_FILE}`);
