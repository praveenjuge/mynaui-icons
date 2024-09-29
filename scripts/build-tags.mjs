#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import picocolors from 'picocolors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const iconsDir = path.join(__dirname, '../icons/');
const tagsFile = path.join(__dirname, '../tags.json');

try {
  const basename = path.basename(__filename);
  const timeLabel = picocolors.cyan(`[${basename}] finished`);

  console.log(picocolors.cyan(`[${basename}] started`));
  console.time(timeLabel);

  // Read existing tags
  const tagsJSON = await fs.readFile(tagsFile, 'utf-8');
  let tagsObject = JSON.parse(tagsJSON);

  // Get all SVG files
  const files = (await fs.readdir(iconsDir))
    .filter(file => file.endsWith('.svg'))
    .sort((a, b) => a.localeCompare(b));

  const iconsSet = new Set(files.map(file => path.basename(file, '.svg')));

  // Remove deleted icons from tagsObject
  for (const key of Object.keys(tagsObject)) {
    if (!iconsSet.has(key)) {
      delete tagsObject[key];
    }
  }

  // Update tagsObject with current icons
  for (const iconBasename of iconsSet) {
    if (!tagsObject[iconBasename]) {
      const iconTitle = iconBasename.replace(/-/g, ' ');
      const tags = Array.from(
        new Set(iconTitle.toLowerCase().split(' ').filter(Boolean))
      );
      tagsObject[iconBasename] = tags;
    }
  }

  // Write updated tagsObject to tags.json
  await fs.writeFile(tagsFile, JSON.stringify(tagsObject, null, 2));

  console.log(
    picocolors.green('\nSuccess, %s tags prepared!'),
    files.length
  );
  console.timeEnd(timeLabel);
} catch (error) {
  console.error(error);
  process.exit(1);
}
