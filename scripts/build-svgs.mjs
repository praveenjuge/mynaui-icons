#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadConfig, optimize } from 'svgo';
import { cyan, green } from './lib/colors.mjs';
import { createProgressBar } from './lib/progress.mjs';
import { readSvgFiles } from './lib/svg.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const iconConfigs = [
  {
    dir: path.join(__dirname, '../icons/'),
    configFile: './svgo.config.mjs',
  },
  {
    dir: path.join(__dirname, '../icons-solid/'),
    configFile: './svgo.solid.config.mjs',
  },
];

async function processFile(dir, file, config, progressBar) {
  const filepath = path.join(dir, file);
  const basename = path.basename(file, '.svg');

  const originalSvg = await fs.readFile(filepath, 'utf8');
  const { data: optimizedSvg } = await optimize(originalSvg, {
    path: filepath,
    ...config,
  });

  const resultSvg = optimizedSvg.trim();

  // Change filename to lowercase and replace underscores/spaces with dashes
  const newBasename = basename.toLowerCase().replace(/[_ ]+/g, '-');
  const newFilepath = path.join(dir, `${newBasename}.svg`);

  await fs.unlink(filepath);
  await fs.writeFile(newFilepath, resultSvg, 'utf8');

  progressBar.tick();
}

(async () => {
  try {
    const scriptName = path.basename(__filename);
    const timeLabel = cyan(`[${scriptName}] finished`);

    console.log(cyan(`[${scriptName}] started`));
    console.time(timeLabel);

    // Collect every file to process across both icon sets, loading each
    // unique SVGO config a single time rather than once per icon.
    const allFiles = [];
    const configCache = new Map();
    for (const { dir, configFile } of iconConfigs) {
      if (!configCache.has(configFile)) {
        configCache.set(
          configFile,
          await loadConfig(path.join(__dirname, configFile)),
        );
      }
      const files = await readSvgFiles(dir);
      for (const file of files) {
        allFiles.push({ dir, file, configFile });
      }
    }

    const totalFiles = allFiles.length;
    const progressBar = createProgressBar(totalFiles);

    for (const { dir, file, configFile } of allFiles) {
      await processFile(dir, file, configCache.get(configFile), progressBar);
    }

    console.log(
      green('\nSuccess! Optimized %d icon%s.'),
      totalFiles,
      totalFiles === 1 ? '' : 's',
    );
    console.timeEnd(timeLabel);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
