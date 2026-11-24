import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const word = "lesson";

mkdirSync(outputDir, { recursive: true });
const outputPath = join(outputDir, "entry.txt");
writeFileSync(outputPath, word, "utf8");

// Byte-exact check: the file must contain exactly one word, no newline.
const written = readFileSync(outputPath, "utf8");
if (written !== word) {
  throw new Error(
    `entry.txt must be exactly ${JSON.stringify(word)}; got ${JSON.stringify(written)}`,
  );
}
