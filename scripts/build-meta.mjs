#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import picocolors from "picocolors";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const regularIconsDir = path.join(__dirname, "../icons/");
const solidIconsDir = path.join(__dirname, "../icons-solid/");
const metaFile = path.join(__dirname, "../packages/icons/meta.json");
const tagsObject = JSON.parse(await fs.readFile(path.join(__dirname, "../tags.json"), "utf-8"));

(async () => {
  try {
    const basename = path.basename(fileURLToPath(import.meta.url));
    const timeLabel = picocolors.cyan(`[${basename}] finished`);

    console.log(picocolors.cyan(`[${basename}] started`));
    console.time(timeLabel);

    const files = (await fs.readdir(regularIconsDir))
      .filter((file) => file.endsWith(".svg"))
      .sort();

    const icons = Object.fromEntries(
      await Promise.all(
        files.map(async (file) => {
          const iconName = path.basename(file, ".svg");
          const tags = tagsObject[iconName] || [];
          const regularSvgContent = await fs.readFile(path.join(regularIconsDir, file), "utf-8");
          const solidSvgContent = await fs.readFile(path.join(solidIconsDir, file), "utf-8");

          const regular = regularSvgContent
            .replace(/<svg.*?>|<\/svg>/g, "")
            .replace(/\n/g, "")
            .replace(/"/g, "'")
            .trim();

          const solid = solidSvgContent
            .replace(/<svg.*?>|<\/svg>/g, "")
            .replace(/\n/g, "")
            .replace(/"/g, "'")
            .trim();

          return [iconName, { tags, regular, solid }];
        })
      )
    );

    await fs.writeFile(metaFile, JSON.stringify(icons, null, 2));

    console.log(picocolors.green("\nSuccess Meta Page Done!"));
    console.timeEnd(timeLabel);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
