#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import http from "node:http";
import url from "node:url";
import picocolors from "picocolors";
import "dotenv/config";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TAGS_FILE = path.join(__dirname, "../tags.json");
const PLAYGROUND_FILE = path.join(__dirname, "../tags-playground.html");

const PORT = 3001;
const GEMINI_KEY = process.env.GEMINI_KEY;

const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);

  // Enable CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.method === "GET" && parsedUrl.pathname === "/") {
    try {
      const htmlContent = await fs.readFile(PLAYGROUND_FILE, "utf-8");
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(htmlContent);
    } catch (error) {
      res.writeHead(404);
      res.end(
        "Playground file not found. Please run build-tags-playground.mjs first.",
      );
    }
    return;
  }

  if (req.method === "GET" && parsedUrl.pathname === "/tags") {
    try {
      const tagsFileContent = await fs.readFile(TAGS_FILE, "utf-8");
      const tagsData = JSON.parse(tagsFileContent);

      // Sort the icons by the number of tags (lowest first)
      const sortedEntries = Object.entries(tagsData).sort((entryA, entryB) => {
        const tagsA = entryA[1]; // tagsA is the array of tags for icon A
        const tagsB = entryB[1]; // tagsB is the array of tags for icon B
        return tagsA.length - tagsB.length;
      });

      // Reconstruct the object from sorted entries.
      // Modern JavaScript engines generally preserve insertion order for string keys.
      const sortedTagsData = Object.fromEntries(sortedEntries);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(sortedTagsData));
    } catch (error) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Tags file not found" }));
    }
    return;
  }

  // Serve individual SVG files
  if (
    req.method === "GET" && parsedUrl.pathname.startsWith("/icon/") &&
    parsedUrl.pathname.endsWith(".svg")
  ) {
    try {
      const iconName = path.basename(parsedUrl.pathname, ".svg");
      const iconsDir = path.join(__dirname, "../icons");
      const svgPath = path.join(iconsDir, `${iconName}.svg`);

      const svgContent = await fs.readFile(svgPath, "utf-8");
      res.writeHead(200, { "Content-Type": "image/svg+xml" });
      res.end(svgContent);
    } catch (error) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "SVG file not found" }));
    }
    return;
  }

  if (req.method === "POST" && parsedUrl.pathname === "/generate-tags") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", async () => {
      try {
        const { iconName, existingTags } = JSON.parse(body);

        if (!GEMINI_KEY) {
          throw new Error("GEMINI_KEY not found in environment variables");
        }

        const prompt =
          `You are an expert at creating search tags for icons. Generate relevant search tags for an icon named "${iconName}" that currently has these tags: [${
            existingTags.join(", ")
          }].

Instructions:
- All tags should be one word only
- Focus on what users will search for when looking for this icon
- Maximum 10 tags total per icon
- Include the existing tags unless they need improvement
- Think about: purpose, category, synonyms, use cases, emotions, contexts
- Avoid overly technical terms unless the icon is technical
- Make tags discoverable and intuitive

Icon name: ${iconName}
Current tags: ${existingTags.join(", ")}

Respond with only a JSON array of strings, nothing else. Example: ["tag1", "tag2", "tag3"]`;

        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_KEY}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              contents: [{
                parts: [{ text: prompt }],
              }],
            }),
          },
        );

        if (!response.ok) {
          throw new Error(`Gemini API error: ${response.status}`);
        }

        const data = await response.json();
        const generatedText = data.candidates[0].content.parts[0].text;

        // Extract JSON array from the response
        const jsonMatch = generatedText.match(/\[.*\]/);
        if (!jsonMatch) {
          throw new Error("Could not extract tags from AI response");
        }

        const suggestedTags = JSON.parse(jsonMatch[0]);

        console.log(
          picocolors.green(`Generated tags for ${iconName}:`),
          suggestedTags,
        );

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ success: true, tags: suggestedTags }));
      } catch (error) {
        console.error(picocolors.red("Error generating tags:"), error.message);

        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ success: false, error: error.message }));
      }
    });
    return;
  }

  if (req.method === "POST" && parsedUrl.pathname === "/save-tags") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", async () => {
      try {
        const tagsData = JSON.parse(body);

        // Write to tags.json file
        await fs.writeFile(
          TAGS_FILE,
          JSON.stringify(tagsData, null, 2),
          "utf-8",
        );

        console.log(picocolors.green("Tags saved successfully!"));

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ success: true }));
      } catch (error) {
        console.error(picocolors.red("Error saving tags:"), error.message);

        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ success: false, error: error.message }));
      }
    });
    return;
  }

  // Serve static files from root directory
  if (req.method === "GET") {
    try {
      const fileName = parsedUrl.pathname.slice(1); // Remove leading slash
      if (
        fileName && fileName.endsWith(".html") &&
        fileName !== "tags-playground.html"
      ) {
        const filePath = path.join(__dirname, "..", fileName);
        const fileContent = await fs.readFile(filePath, "utf-8");
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(fileContent);
        return;
      }
    } catch (error) {
      // File not found, continue to 404
    }
  }

  res.writeHead(404);
  res.end("Not found");
});

server.listen(PORT, () => {
  console.log(
    picocolors.green(
      `Tags playground server running at http://localhost:${PORT}`,
    ),
  );
  console.log(picocolors.blue("Press Ctrl+C to stop the server"));
});
