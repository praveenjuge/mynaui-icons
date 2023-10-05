#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import picocolors from "picocolors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const iconsDir = path.join(__dirname, "../icons/");
const metaFile = path.join(__dirname, "../packages/icons/meta.json");

const tagsFile = path.join(__dirname, "../tags.json");
const tagsJSON = await fs.readFile(tagsFile, "utf-8");
const tagsObject = JSON.parse(tagsJSON);

function capitalizeFirstLetter(string) {
  return (string.charAt(0).toUpperCase() + string.slice(1))
    .split("-")
    .join(" ");
}

(async () => {
  try {
    const basename = path.basename(__filename);
    const timeLabel = picocolors.cyan(`[${basename}] finished`);

    console.log(picocolors.cyan(`[${basename}] started`));
    console.time(timeLabel);

    const files = (await fs.readdir(iconsDir))
      .filter((file) => file.endsWith(".svg"))
      .sort((a, b) => a.localeCompare(b));

    const icons = await Promise.all(
      files.map(async (file) => {
        const iconBasename = path.basename(file, path.extname(file));
        const tags = tagsObject[iconBasename]?.tags || [];
        const svg = await fs.readFile(path.join(iconsDir, file), "utf-8");

        return {
          [iconBasename]: {
            tags,
            svg: svg
              .replace(/<svg.*?>/, "")
              .replace(/<\/svg>/, "")
              .replace(/\n/g, "")
              .replace(/\"/g, "'")
              .trim(),
          },
        };
      })
    );

    await fs.writeFile(
      metaFile,
      JSON.stringify(Object.assign({}, ...icons), null, 2)
    );

    console.log(picocolors.green("\nSuccess Meta Page Done!"));
    console.timeEnd(timeLabel);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
