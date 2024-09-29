#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import picocolors from "picocolors";
import { loadConfig, optimize } from "svgo";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const iconConfigs = [
  {
    dir: path.join(__dirname, "../icons/"),
    configFile: "./svgo.config.mjs",
  },
  {
    dir: path.join(__dirname, "../icons-solid/"),
    configFile: "./svgo.solid.config.mjs",
  },
];

async function processFile(dir, file, config) {
  const filepath = path.join(dir, file);
  const basename = path.basename(file, ".svg");

  const originalSvg = await fs.readFile(filepath, "utf8");
  const { data: optimizedSvg } = await optimize(originalSvg, {
    path: filepath,
    ...config,
  });

  const resultSvg = optimizedSvg.trim();

  // Change filename to lowercase and replace underscores/spaces with dashes
  const newBasename = basename.toLowerCase().replace(/[_ ]+/g, "-");
  const newFilepath = path.join(dir, `${newBasename}.svg`);

  await fs.unlink(filepath);
  await fs.writeFile(newFilepath, resultSvg, "utf8");

  console.log(picocolors.green(`Optimized: ${newBasename}.svg`));
}

(async () => {
  try {
    const scriptName = path.basename(__filename);
    const timeLabel = picocolors.cyan(`[${scriptName}] finished`);

    console.log(picocolors.cyan(`[${scriptName}] started`));
    console.time(timeLabel);

    let totalFiles = 0;

    for (const { dir, configFile } of iconConfigs) {
      const config = await loadConfig(path.join(__dirname, configFile));
      const files = (await fs.readdir(dir)).filter((file) => file.endsWith(".svg"));
      totalFiles += files.length;

      await Promise.all(files.map((file) => processFile(dir, file, config)));
    }

    console.log(
      picocolors.green("\nSuccess! Optimized %d icon%s."),
      totalFiles,
      totalFiles === 1 ? "" : "s"
    );
    console.timeEnd(timeLabel);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
