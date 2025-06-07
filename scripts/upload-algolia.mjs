#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import picocolors from "picocolors";
import { algoliasearch } from "algoliasearch";
import "dotenv/config";

console.log(picocolors.blue("Starting Algolia upload process..."));

const { ALGOLIA_APPLICATION_ID, ALGOLIA_ADMIN_API_KEY } = process.env;
if (!ALGOLIA_APPLICATION_ID || !ALGOLIA_ADMIN_API_KEY) {
  console.error(
    picocolors.red(
      "ALGOLIA_APPLICATION_ID and ALGOLIA_ADMIN_API_KEY must be set in the environment",
    ),
  );
  process.exit(1);
}

// Connect and authenticate with your Algolia app
const client = algoliasearch(
  ALGOLIA_APPLICATION_ID,
  ALGOLIA_ADMIN_API_KEY,
);
console.log(picocolors.green("Connected to Algolia"));

// Fetch and index objects in Algolia
const processRecords = async () => {
  console.log(picocolors.yellow("Reading tags.json file..."));
  // Read and parse the tags.json file
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const tagsFile = path.join(__dirname, "../tags.json");
  const tagsJSON = await fs.readFile(tagsFile, "utf-8");

  const data = JSON.parse(tagsJSON);
  console.log(
    picocolors.green(
      `Successfully parsed tags.json. Found ${Object.keys(data).length} icons.`
    )
  );

  // Transform the data into an array of objects
  console.log(picocolors.yellow("Transforming data for Algolia..."));
  const objects = Object.keys(data).map((key) => ({
    objectID: key, // Use the key as the unique objectID
    name: key,
    tags: data[key],
  }));
  console.log(
    picocolors.green(`Transformed ${objects.length} objects for indexing.`)
  );

  // Save the objects to Algolia
  console.log(picocolors.yellow("Uploading objects to Algolia..."));
  return client.saveObjects({
    indexName: "icons",
    objects: objects,
  });
};

processRecords()
  .then((result) => {
    console.log(picocolors.green("Successfully indexed objects!"));
  })
  .catch((err) => {
    console.error(picocolors.red("Error occurred during indexing:"));
    console.error(err);
  });
