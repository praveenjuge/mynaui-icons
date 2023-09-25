#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import picocolors from "picocolors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const iconsDir = path.join(__dirname, "../icons/");
const pagesDir = path.join(__dirname, "../docs/content/icons/");

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

  const pageTemplate = `---
title: ${iconTitle}
tags:
icon: ${iconBasename}
svg: '${iconContent}'
---`;

  try {
    await fs.access(pageName, fs.F_OK);

    console.log(
      `${picocolors.cyan(
        iconBasename
      )}: Page already exists; changing only the SVG`
    );

    const pageContent = await fs.readFile(pageName, "utf8");
    const pageContentLines = pageContent.split("\n");
    const svgLineIndex = pageContentLines.findIndex((line) =>
      line.startsWith("svg:")
    );

    pageContentLines[svgLineIndex] = `svg: '${iconContent}'`;

    await fs.writeFile(pageName, pageContentLines.join("\n"));

    console.log(picocolors.green(`${iconBasename}: Page updated`));
  } catch {
    await fs.writeFile(pageName, pageTemplate);
    console.log(picocolors.green(`${iconBasename}: Page created`));
  }
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
        const iconContent = fs.readFile(
          path.join(iconsDir, `${iconBasename}.svg`),
          "utf8"
        );
        if (!iconContent) {
          fs.unlink(path.join(pagesDir, file));
        }
      })
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
