// main.ts — bring-the-humans-03 entry program (Node 22).
// Copies VIDEO.json from the repository root to the output directory.
// That is all it has to do: the house reads the video itself from the URL
// in VIDEO.json and writes its counts to /output/video.counts.json.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const video = JSON.parse(readFileSync(join(root, "VIDEO.json"), "utf-8"));
console.log("video:", video.url);
copyFileSync(join(root, "VIDEO.json"), join(outDir, "VIDEO.json"));
console.log("copied VIDEO.json to", join(outDir, "VIDEO.json"));
