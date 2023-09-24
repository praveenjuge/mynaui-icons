import fs from "fs";
import path, { resolve, basename } from "path";
import { fileURLToPath } from "url";
import { parseSync } from "svgson";
import minimist from "minimist";

export const getCurrentDirPath = () => {
  return path.dirname(fileURLToPath(import.meta.url));
};

export const HOME_DIR = resolve(getCurrentDirPath(), "..");

export const ICONS_SRC_DIR = resolve(HOME_DIR, "src/_icons");
export const ICONS_DIR = resolve(HOME_DIR, "icons");
export const PACKAGES_DIR = resolve(HOME_DIR, "packages");

export const getArgvs = () => {
  return minimist(process.argv.slice(2));
};

export const getPackageDir = (packageName) => {
  return `${PACKAGES_DIR}/${packageName}`;
};

export const readSvgDirectory = (directory) => {
  return fs
    .readdirSync(directory)
    .filter((file) => path.extname(file) === ".svg");
};

export const readSvgs = () => {
  const svgFiles = readSvgDirectory(ICONS_DIR);

  return svgFiles.map((svgFile) => {
    const name = basename(svgFile, ".svg"),
      namePascal = toPascalCase(`${name}`),
      contents = readSvg(svgFile, ICONS_DIR).trim(),
      path = resolve(ICONS_DIR, svgFile),
      obj = parseSync(
        contents.replace(
          '<path stroke="none" d="M0 0h24v24H0z" fill="none"/>',
          ""
        )
      );

    return {
      name,
      namePascal,
      contents,
      obj,
      path,
    };
  });
};

export const readSvg = (fileName, directory) => {
  return fs.readFileSync(path.join(directory, fileName), "utf-8");
};

export const toCamelCase = (string) => {
  return string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2) =>
    p2 ? p2.toUpperCase() : p1.toLowerCase()
  );
};

export const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);

  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
