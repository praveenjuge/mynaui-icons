#!/usr/bin/env node

import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import readline from 'node:readline';
import picocolors from 'picocolors';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ICONS_DIR = path.join(__dirname, '../icons');
const ICONS_SOLID_DIR = path.join(__dirname, '../icons-solid');

const tasks = [
  'check:icons',
  'build:svgs',
  'build:tags',
  'oslllo-svg-fixer',
  'build:svgtofont-regular',
  'build:svgtofont-solid',
  'copy:icons',
  'cleanup',
  'build:meta',
  'build:react',
  'build:playground',
  'generate:ai-tags',
  'generate:rename-preview',
];

const scriptName = path.basename(fileURLToPath(import.meta.url));
const timeLabel = picocolors.cyan(`[${scriptName}] finished`);

async function askQuestion(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise(resolve => {
    rl.question(query, (answer) => {
      rl.close();
      resolve(answer.toLowerCase().trim());
    });
  });
}

async function waitForContinue() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise(resolve => {
    rl.question('Press Enter when you have filled both folders with new icons...', () => {
      rl.close();
      resolve();
    });
  });
}

async function checkAndAskForNewIcons() {
  // Count SVG files in both directories
  const iconCount = fs.readdirSync(ICONS_DIR).filter(f => f.endsWith('.svg')).length;
  const solidIconCount = fs.readdirSync(ICONS_SOLID_DIR).filter(f => f.endsWith('.svg')).length;

  console.log(picocolors.cyan('\n📁 Current icon counts:'));
  console.log(`  icons/: ${picocolors.yellow(iconCount)} SVG files`);
  console.log(`  icons-solid/: ${picocolors.yellow(solidIconCount)} SVG files`);

  const answer = await askQuestion(
    '\nDo you want to clear icons/ and icons-solid/ to export new icons from Figma? (y/N): '
  );

  if (answer === 'y' || answer === 'yes') {
    console.log(picocolors.yellow('\n🗑️  Clearing icon directories...'));

    // Clear icons directory
    const iconFiles = fs.readdirSync(ICONS_DIR);
    for (const file of iconFiles) {
      fs.unlinkSync(path.join(ICONS_DIR, file));
    }

    // Clear icons-solid directory
    const solidIconFiles = fs.readdirSync(ICONS_SOLID_DIR);
    for (const file of solidIconFiles) {
      fs.unlinkSync(path.join(ICONS_SOLID_DIR, file));
    }

    console.log(picocolors.green('✅ Folders cleared! Please export icons from Figma now.'));
    console.log(picocolors.cyan(`   Export to: ${ICONS_DIR}`));
    console.log(picocolors.cyan(`   Export to: ${ICONS_SOLID_DIR}\n`));

    await waitForContinue();

    // Verify icons exist now
    const newIconCount = fs.readdirSync(ICONS_DIR).filter(f => f.endsWith('.svg')).length;
    const newSolidIconCount = fs.readdirSync(ICONS_SOLID_DIR).filter(f => f.endsWith('.svg')).length;

    if (newIconCount === 0 || newSolidIconCount === 0) {
      console.log(picocolors.red('❌ Error: One or both folders are still empty!'));
      process.exit(1);
    }

    console.log(picocolors.green(`✅ Found ${newIconCount} icons/ and ${newSolidIconCount} icons-solid/`));
  } else {
    console.log(picocolors.blue('ℹ️  Continuing with existing icons...\n'));
  }
}

async function runTask(name) {
  console.log(picocolors.blue(`\n> ${name}`));

  return new Promise((resolve, reject) => {
    const child = spawn('bun', ['run', name], { stdio: 'inherit' });
    child.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Task '${name}' failed with exit code ${code}`));
      }
    });
  });
}

(async () => {
  console.log(picocolors.cyan(`[${scriptName}] started`));
  console.time(timeLabel);

  try {
    // Ask about new icons before starting tasks
    await checkAndAskForNewIcons();

    // Run all tasks
    for (const task of tasks) {
      await runTask(task);
    }
    console.timeEnd(timeLabel);
    console.log(picocolors.green('All tasks completed successfully.'));
  } catch (error) {
    console.timeEnd(timeLabel);
    console.error(picocolors.red(error.message));
    process.exit(1);
  }
})();
