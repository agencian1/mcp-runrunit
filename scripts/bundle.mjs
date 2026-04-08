#!/usr/bin/env node
import * as esbuild from "esbuild";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { readFileSync } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const outfile = join(root, "dist", "index.js");

await esbuild.build({
  entryPoints: [join(root, "src", "index.ts")],
  bundle: true,
  platform: "node",
  format: "esm",
  outfile,
  packages: "bundle",
  target: "node18",
  sourcemap: false,
  minify: false,
});

// Falhar se o arquivo ainda for o output do tsc (import externo do stdio) em vez do bundle
const content = readFileSync(outfile, "utf8");
const head = content.slice(0, 1500);
if (head.includes('from "@modelcontextprotocol/sdk/server/stdio') && !head.includes("__create")) {
  console.error("mcp-runrunit: ERROR dist/index.js looks like tsc output, not bundle - run postbuild");
  process.exit(1);
}
console.error("mcp-runrunit: bundled dist/index.js");
