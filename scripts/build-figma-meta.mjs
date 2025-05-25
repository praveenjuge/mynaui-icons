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

// get cli arguments
const inputFile = process.argv[2];
const inputJSON = await fs.readFile(inputFile, "utf-8");
const inputObject = JSON.parse(inputJSON);

function capitalizeFirstLetter(string) {
  return (string.charAt(0).toUpperCase() + string.slice(1))
    .split("-")
    .join(" ");
}

async function main(file) {
  const iconBasename = path.basename(file, path.extname(file));
  const iconTitle = capitalizeFirstLetter(iconBasename);

  let tags = [];
  tags = tagsObject[iconBasename]
    ? tagsObject[iconBasename]
    : iconTitle.split(" ");
  tags = tags.map((tag) => `${tag}`).join(", ");

  const pageTemplate = `Title: ${iconTitle}
Tags: ${tags}`;

  // Check if the icon exists in the input object before updating
  if (inputObject[iconBasename]) {
    // write to inputObject's corresponding key's value: documentation
    inputObject[iconBasename].description = pageTemplate;
    console.log(picocolors.yellow(`${iconBasename}: Updating meta...`));
  } else {
    console.log(
      picocolors.red(
        `${iconBasename}: Icon not found in input JSON, skipping...`,
      ),
    );
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

    // write to file after all icons have been processed
    await fs.writeFile(inputFile, JSON.stringify(inputObject, null, 2));

    const filesLength = files.length;

    console.log(
      picocolors.green("\nSuccess, %s page%s prepared!"),
      filesLength,
      filesLength === 1 ? "" : "s",
    );
    console.timeEnd(timeLabel);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
