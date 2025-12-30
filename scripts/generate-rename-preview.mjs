#!/usr/bin/env node

/**
 * Generate visual preview comparing MynaUI and Lucide icons
 * Shows exact matches, MynaUI-only icons, Lucide-only icons, and AI-suggested renames
 */

import fs from 'fs';
import path from 'path';
import { createGroq } from '@ai-sdk/groq';
import { generateText } from 'ai';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');

// Load environment variables from project root
dotenv.config({ path: path.join(PROJECT_ROOT, '.env') });
const MYNAUI_ICONS_DIR = path.join(PROJECT_ROOT, 'icons');
const OUTPUT_FILE = path.join(PROJECT_ROOT, 'rename-preview.html');

console.log('🔍 Generating rename preview page...\n');

// Fetch Lucide icon names from GitHub API (no temp files, more reliable)
async function getLucideIconNames() {
  console.log('Fetching Lucide icon names from GitHub API...');

  try {
    const response = await fetch(
      'https://api.github.com/repos/lucide-icons/lucide/git/trees/main?recursive=1'
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data = await response.json();
    const iconNames = data.tree
      .filter((item) => item.path.match(/^icons\/[^/]+\.svg$/))
      .map((item) => item.path.replace(/^icons\//, '').replace(/\.svg$/, ''));

    console.log(`Found ${iconNames.length} Lucide icons`);
    return iconNames;
  } catch (err) {
    console.error('Error fetching Lucide icons:', err.message);
    return [];
  }
}

function readSvgContent(iconName) {
  const filePath = path.join(MYNAUI_ICONS_DIR, `${iconName}.svg`);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const match = content.match(/<svg[\s\S]*<\/svg>/);
    if (!match) return null;

    let svg = match[0].trim();
    if (/class="/.test(svg)) {
      svg = svg.replace(/class="([^"]*)"/, 'class="$1 mynaui-svg"');
    } else {
      svg = svg.replace('<svg', '<svg class="mynaui-svg"');
    }

    return svg;
  }
  return null;
}

// Use AI to find potential renames
async function findPotentialRenames(mynauiOnlyList, lucideOnlyList) {
  console.log('🤖 Using AI to find potential icon renames...');

  const groq = createGroq({
    apiKey: process.env.GROQ_API_KEY || '',
  });

  if (!process.env.GROQ_API_KEY) {
    console.log('   No GROQ_API_KEY found, skipping AI suggestions');
    return [];
  }

  // Limit the lists to avoid token limits
  const mynauiSample = mynauiOnlyList.slice(0, 500);
  const lucideSample = lucideOnlyList.slice(0, 1000);

  const prompt = `You are an icon naming expert. I need you to match MynaUI icon names to Lucide icon names based on semantic similarity.

MynaUI icons (that need potential renaming):
${mynauiSample.join(', ')}

Lucide icons (available to match to):
${lucideSample.join(', ')}

Return ONLY a valid JSON object with this exact format:
{
  "matches": [
    {"mynaui": "icon-name-1", "lucide": "matched-icon-name-1"},
    {"mynaui": "icon-name-2", "lucide": "matched-icon-name-2"}
  ]
}

CRITICAL Rules:
1. Each Lucide icon can ONLY be matched to ONE MynaUI icon - no duplicates!
2. Each MynaUI icon can ONLY be matched to ONE Lucide icon - no duplicates!
3. Only match icons that represent the EXACT SAME concept/thing
4. Use word similarity, synonyms, and common icon naming patterns
5. The JSON must be valid and complete

Return ONLY the JSON, no other text.`;

  try {
    const result = await generateText({
      model: groq('openai/gpt-oss-120b'),
      prompt: prompt,
      temperature: 0.1,
      maxTokens: 4000,
    });

    // Parse the AI response
    let jsonMatch = result.text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      const data = JSON.parse(jsonMatch[0]);
      let matches = data.matches || [];

      // Deduplicate: ensure each mynaui and lucide icon appears only once
      const seenMynaui = new Set();
      const seenLucide = new Set();
      const uniqueMatches = [];

      for (const match of matches) {
        if (!seenMynaui.has(match.mynaui) && !seenLucide.has(match.lucide)) {
          seenMynaui.add(match.mynaui);
          seenLucide.add(match.lucide);
          uniqueMatches.push(match);
        }
      }

      console.log(
        `   Found ${uniqueMatches.length} unique rename matches (deduped from ${matches.length})\n`,
      );
      return uniqueMatches;
    }
    return [];
  } catch (err) {
    console.error('   Error getting AI suggestions:', err.message);
    return [];
  }
}

async function main() {
  // Get MynaUI icon names
  const mynauiFiles = fs
    .readdirSync(MYNAUI_ICONS_DIR)
    .filter((f) => f.endsWith('.svg'));
  const mynauiNames = mynauiFiles.map((f) => f.replace('.svg', ''));

  // Get Lucide icon names
  const lucideNames = await getLucideIconNames();
  const lucideNamesSet = new Set(lucideNames);

  // Build categories
  const exactMatches = mynauiNames
    .filter((name) => lucideNamesSet.has(name))
    .sort();
  const mynauiOnly = mynauiNames
    .filter((name) => !lucideNamesSet.has(name))
    .sort();
  const lucideOnly = lucideNames
    .filter((name) => !mynauiNames.includes(name))
    .sort();

  console.log(`Found ${mynauiNames.length} MynaUI icons`);
  console.log(`Found ${lucideNames.length} Lucide icons`);
  console.log(`  - ${exactMatches.length} exact matches (same name)`);
  console.log(`  - ${mynauiOnly.length} icons unique to MynaUI`);
  console.log(`  - ${lucideOnly.length} icons unique to Lucide\n`);

  // Get AI-suggested renames
  const suggestedRenames = await findPotentialRenames(mynauiOnly, lucideOnly);

  // Generate HTML
  let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Icon Rename Preview - MynaUI to Lucide</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #ffffff;
            color: #1a1a1a;
            padding: 12px;
        }
        .header {
            text-align: center;
            padding: 15px 0;
            border-bottom: 1px solid #e5e5e5;
            margin-bottom: 15px;
        }
        .header h1 {
            font-size: 1.2rem;
            margin-bottom: 5px;
            color: #1a1a1a;
        }
        .stats {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 8px;
        }
        .stat { text-align: center; }
        .stat .num { font-size: 1.1rem; font-weight: 600; }
        .stat .label { color: #666; font-size: 0.7rem; }
        .stat.match .num { color: #22c55e; }
        .stat.rename .num { color: #f59e0b; }
        .stat.mynaui .num { color: #3b82f6; }
        .stat.lucide .num { color: #ec4899; }

        .nav {
            display: flex;
            justify-content: center;
            gap: 6px;
            margin-bottom: 15px;
        }
        .nav-btn {
            background: #f5f5f5;
            border: none;
            color: #333;
            padding: 6px 12px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 0.75rem;
        }
        .nav-btn:hover { background: #e5e5e5; }
        .nav-btn.active { background: #1a1a1a; color: white; }

        .category { margin-bottom: 20px; }
        .category-title {
            font-size: 0.9rem;
            margin-bottom: 10px;
            color: #666;
        }
        .icon-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 8px;
        }
        .icon-grid.dense {
            grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
            gap: 6px;
        }
        .rename-card {
            background: #f9f9f9;
            border-radius: 6px;
            padding: 6px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .icon-card {
            background: #f9f9f9;
            border-radius: 6px;
            padding: 6px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4px;
        }
        .icon-side {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2px;
            flex: 1;
        }
        .icon-name {
            font-size: 0.65rem;
            text-align: center;
            color: #666;
            word-break: break-all;
            line-height: 1.2;
        }
        .icon-preview {
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: white;
            border-radius: 4px;
            border: 1px solid #e5e5e5;
        }
        .icon-preview svg { width: 18px !important; height: 18px !important; }
        .icon-preview.mynaui { color: #3b82f6; }
        .icon-preview.mynaui svg { stroke: currentColor; }
        .icon-preview.lucide img { filter: invert(0.5) sepia(1) saturate(5) hue-rotate(290deg); }
        .arrow {
            color: #f59e0b;
            font-size: 0.9rem;
        }
        .section { display: none; }
        .section.active { display: block; }
    </style>
</head>
<body>
    <div class="header">
        <h1>MynaUI → Lucide Icon Comparison</h1>
        <div class="stats">
            <div class="stat match">
                <div class="num">${exactMatches.length}</div>
                <div class="label">Same Name</div>
            </div>
            <div class="stat rename">
                <div class="num">${suggestedRenames.length}</div>
                <div class="label">AI Suggested</div>
            </div>
            <div class="stat mynaui">
                <div class="num">${mynauiOnly.length}</div>
                <div class="label">MynaUI Only</div>
            </div>
            <div class="stat lucide">
                <div class="num">${lucideOnly.length}</div>
                <div class="label">Lucide Only</div>
            </div>
        </div>
    </div>

    <div class="nav">
        <button class="nav-btn" data-section="exact-matches">Same Name (${exactMatches.length})</button>
        <button class="nav-btn active" data-section="to-rename">To Rename (${suggestedRenames.length})</button>
        <button class="nav-btn" data-section="mynaui-only">MynaUI Only (${mynauiOnly.length})</button>
        <button class="nav-btn" data-section="lucide-only">Lucide Only (${lucideOnly.length})</button>
    </div>

    <div id="exact-matches-section" class="section">
        <div class="category">
            <h2 class="category-title">Same Name in MynaUI & Lucide (${exactMatches.length})</h2>
            <div class="icon-grid">
`;

  for (let i = 0; i < exactMatches.length; i++) {
    const iconName = exactMatches[i];
    const mynauiSvg = readSvgContent(iconName);
    const lucideCdnUrl = `https://unpkg.com/lucide-static@latest/icons/${iconName}.svg`;

    html += `
                <div class="rename-card">
                    <div class="icon-side">
                    <div class="icon-preview mynaui">
                            ${mynauiSvg || ''}
                        </div>
                        <div class="icon-name">${iconName}</div>
                    </div>
                    <div class="arrow">=</div>
                    <div class="icon-side">
                        <div class="icon-preview lucide">
                            <img src="${lucideCdnUrl}" width="24" height="24" alt="${iconName}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22><text y=%2218%22 font-size=%2220%22>✗</text></svg>'">
                        </div>
                        <div class="icon-name">${iconName}</div>
                    </div>
                </div>`;
  }

  html += `
            </div>
        </div>
    </div>

    <div id="to-rename-section" class="section active">
        <div class="category">
            <h2 class="category-title">AI-Suggested Renames (${suggestedRenames.length})</h2>
            <div class="icon-grid">
`;

  // Add AI-suggested renames
  for (const match of suggestedRenames) {
    const mynauiSvg = readSvgContent(match.mynaui);
    const lucideCdnUrl = `https://unpkg.com/lucide-static@latest/icons/${match.lucide}.svg`;

    html += `
                <div class="rename-card">
                    <div class="icon-side">
                        <div class="icon-preview mynaui">
                            ${mynauiSvg || ''}
                        </div>
                        <div class="icon-name">${match.mynaui}</div>
                    </div>
                    <div class="arrow">→</div>
                    <div class="icon-side">
                        <div class="icon-preview lucide">
                            <img src="${lucideCdnUrl}" width="24" height="24" alt="${match.lucide}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22><text y=%2218%22 font-size=%2220%22>✗</text></svg>'">
                        </div>
                        <div class="icon-name">${match.lucide}</div>
                    </div>
                </div>`;
  }

  html += `
            </div>
        </div>
    </div>

    <div id="mynaui-only-section" class="section">
        <div class="category">
            <h2 class="category-title">Icons Only in MynaUI (${mynauiOnly.length})</h2>
            <div class="icon-grid dense">
`;

  // Add all MynaUI only icons
  for (let i = 0; i < mynauiOnly.length; i++) {
    const iconName = mynauiOnly[i];
    const svg = readSvgContent(iconName);
    html += `
                <div class="icon-card">
                    <div class="icon-preview mynaui">
                        ${svg || ''}
                    </div>
                    <div class="icon-name">${iconName}</div>
                </div>`;
  }

  html += `
            </div>
        </div>
    </div>

    <div id="lucide-only-section" class="section">
        <div class="category">
            <h2 class="category-title">Icons Only in Lucide (${lucideOnly.length})</h2>
            <div class="icon-grid dense">
`;

  // Add all Lucide only icons
  for (let i = 0; i < lucideOnly.length; i++) {
    const iconName = lucideOnly[i];
    const cdnUrl = `https://unpkg.com/lucide-static@latest/icons/${iconName}.svg`;
    html += `
                <div class="icon-card">
                    <div class="icon-preview lucide">
                        <img src="${cdnUrl}" width="24" height="24" alt="${iconName}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22><text y=%2218%22 font-size=%2220%22>✗</text></svg>'">
                    </div>
                    <div class="icon-name">${iconName}</div>
                </div>`;
  }

  html += `
            </div>
        </div>
    </div>

    <script>
        const exactMatches = ${JSON.stringify(exactMatches, null, 2)};
        const mynauiOnly = ${JSON.stringify(mynauiOnly, null, 2)};
        const lucideOnly = ${JSON.stringify(lucideOnly, null, 2)};
        const suggestedRenames = ${JSON.stringify(suggestedRenames, null, 2)};

        // Navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
                document.getElementById(btn.dataset.section + '-section').classList.add('active');
            });
        });
    </script>
</body>
</html>`;

  fs.writeFileSync(OUTPUT_FILE, html);

  console.log(`✅ Rename preview saved to: ${OUTPUT_FILE}`);
  console.log(`   - Lucide icons loaded from CDN`);
}

main().catch(console.error);
