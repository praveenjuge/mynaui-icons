#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import picocolors from "picocolors";
import { loadConfig, optimize } from "svgo";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const iconsDir = path.join(__dirname, "../icons/");

const VERBOSE = process.argv.includes("--verbose");

async function processFile(file, config) {
  const filepath = path.join(iconsDir, file);
  const basename = path.basename(file, ".svg");

  const originalSvg = await fs.readFile(filepath, "utf8");
  const { data: optimizedSvg } = await optimize(originalSvg, {
    path: filepath,
    ...config,
  });

  // svgo will always add a final newline when in pretty mode
  const resultSvg = optimizedSvg.trim();

  // Change filename to lowercase and replace underscores with dashes, spaces with dashes
  const newBasename = basename
    .toLowerCase()
    .replace(/_/g, "-")
    .replace(/ /g, "-");

  const newFilepath = path.join(iconsDir, `${newBasename}.svg`);

  await fs.unlink(filepath);
  await fs.writeFile(newFilepath, resultSvg, "utf8");

  // if (resultSvg !== originalSvg) {
  //   await fs.unlink(filepath);
  //   await fs.writeFile(newFilepath, resultSvg, "utf8");
  // }

  console.log(picocolors.green(`Optimizing - ${basename}`));
}

(async () => {
  try {
    const basename = path.basename(__filename);
    const timeLabel = picocolors.cyan(`[${basename}] finished`);

    console.log(picocolors.cyan(`[${basename}] started`));
    console.time(timeLabel);

    // only svg files

    const files = (await fs.readdir(iconsDir)).filter((file) =>
      file.endsWith(".svg")
    );
    const config = await loadConfig(path.join(__dirname, "./svgo.config.mjs"));

    await Promise.all(files.map((file) => processFile(file, config)));

    const filesLength = files.length;

    console.log(
      picocolors.green("\nSuccess, prepared %s icon%s!"),
      filesLength,
      filesLength === 1 ? "" : "s"
    );
    console.timeEnd(timeLabel);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
