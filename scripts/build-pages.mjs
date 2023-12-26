#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import picocolors from "picocolors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const iconsDir = path.join(__dirname, "../icons/");
const pagesDir = path.join(__dirname, "../docs/content/icons/");

const tagsFile = path.join(__dirname, "../tags.json");
const tagsJSON = await fs.readFile(tagsFile, "utf-8");
const tagsObject = JSON.parse(tagsJSON);

function capitalizeFirstLetter(string) {
  return (string.charAt(0).toUpperCase() + string.slice(1))
    .split("-")
    .join(" ");
}

async function main(file) {
  const iconBasename = path.basename(file, path.extname(file));
  const iconTitle = capitalizeFirstLetter(iconBasename);
  const iconContent = await fs.readFile(path.join(iconsDir, file), "utf8");
  const pageName = path.join(pagesDir, `${iconBasename}.md`);

  console.log(tagsObject[iconBasename]);

  // tags as array and assign to tags variable
  let tags = [];
  tags = tagsObject[iconBasename]
    ? tagsObject[iconBasename]
    : iconTitle.split(" ");
  tags = tags.map((tag) => `"${tag}"`).join(", ");

  const pageTemplate = `---
title: ${iconTitle}
tags: [${tags}]
icon: ${iconBasename}
svg: '${iconContent}'
---`;

  await fs.writeFile(pageName, pageTemplate);
  console.log(picocolors.green(`${iconBasename}: Page created`));
}

(async () => {
  try {
    const basename = path.basename(__filename);
    const timeLabel = picocolors.cyan(`[${basename}] finished`);

    console.log(picocolors.cyan(`[${basename}] started`));
    console.time(timeLabel);

    const files = (await fs.readdir(iconsDir)).filter((file) =>
      file.endsWith(".svg")
    );

    await Promise.all(files.map((file) => main(file)));

    const filesLength = files.length;

    console.log(
      picocolors.green("\nSuccess, %s page%s prepared!"),
      filesLength,
      filesLength === 1 ? "" : "s"
    );
    console.timeEnd(timeLabel);

    // Delete the already existing page if the icon is not available anymore
    const deletePages = (await fs.readdir(pagesDir)).filter((file) =>
      file.endsWith(".md")
    );

    await Promise.all(
      deletePages.map((file) => {
        const iconBasename = path.basename(file, path.extname(file));

        // if icon file is not present
        if (!files.includes(`${iconBasename}.svg`)) {
          const pageName = path.join(pagesDir, `${iconBasename}.md`);

          return fs.unlink(pageName);
        }
      })
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
