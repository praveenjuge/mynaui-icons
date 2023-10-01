#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import picocolors from "picocolors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const iconsDir = path.join(__dirname, "../icons/");
const tagsFile = path.join(__dirname, "../tags.json");

const tagsJSON = await fs.readFile(tagsFile, "utf-8");
const tagsObject = JSON.parse(tagsJSON);
const tagsObjectKeys = Object.keys(tagsObject);
const tagsObjectKeysLength = tagsObjectKeys.length;

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
        const iconTitle = iconBasename.replace(/-/g, " ");
        let tags = [];

        if (tagsObject[iconBasename]?.tags) {
          tags = tagsObject[iconBasename].tags;
        } else {
          // lowercase and split by space
          tags = iconTitle
            .toLowerCase()
            .split(" ")
            .filter((tag) => tag)
            .filter((tag, index, self) => self.indexOf(tag) === index);
        }

        return { [iconBasename]: { tags: tags } };
      })
    );

    // remove icons that have been deleted
    for (let i = 0; i < tagsObjectKeysLength; i++) {
      const key = tagsObjectKeys[i];

      if (!files.includes(`${key}.svg`)) {
        delete tagsObject[key];
      }

      if (i === tagsObjectKeysLength - 1) {
        break;
      }

      await fs.writeFile(tagsFile, JSON.stringify(tagsObject, null, 2));
    }

    await fs.writeFile(
      tagsFile,
      JSON.stringify(Object.assign({}, ...icons), null, 2)
    );

    console.log(picocolors.green("\nSuccess, %s tags prepared!"), files.length);
    console.timeEnd(timeLabel);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
