// Canonical naming helpers shared across build scripts.

export const toCamelCase = (string) =>
  string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2) =>
    p2 ? p2.toUpperCase() : p1.toLowerCase()
  );

export const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};

// Capitalizes the first letter and turns a hyphenated slug into a spaced title
// (e.g. "a-arrow-down" -> "A arrow down"). Used for human-readable meta titles.
export const capitalizeFirstLetter = (string) =>
  (string.charAt(0).toUpperCase() + string.slice(1)).split("-").join(" ");
