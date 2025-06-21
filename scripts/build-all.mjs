#!/usr/bin/env node

import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import picocolors from 'picocolors';

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
  'build:vue',
  'build:playground',
  'upload-algolia',
];

const scriptName = path.basename(fileURLToPath(import.meta.url));
const timeLabel = picocolors.cyan(`[${scriptName}] finished`);

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
