import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import Critters from "critters";

const distDir = join(process.cwd(), ".next");
const allowRules = [
  /\.dark\b/,
  /html:not\(\.dark\)/,
  /\.btn-primary/,
  /\.btn-secondary/,
  /\.link-interactive/,
  /\.skill-chip/,
  /\.theme-toggle-btn/,
  /\.project-card/,
  /\.demo-link/,
  /\.project-placeholder/,
];

const critters = new Critters({
  path: distDir,
  publicPath: "/_next/",
  ssrMode: true,
  preload: "media",
  fonts: false,
  allowRules,
});

function collectHtmlFiles(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      collectHtmlFiles(fullPath, files);
      continue;
    }
    if (entry.endsWith(".html")) {
      files.push(fullPath);
    }
  }
  return files;
}

const htmlFiles = collectHtmlFiles(join(distDir, "server", "app"));
let updated = 0;

for (const file of htmlFiles) {
  const source = readFileSync(file, "utf8");
  const output = await critters.process(source);
  if (output !== source) {
    writeFileSync(file, output);
    updated += 1;
  }
}

console.log(`inline-critical-css: processed ${htmlFiles.length} files, updated ${updated}`);
