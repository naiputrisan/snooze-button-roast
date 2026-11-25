import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Saturday, 6 AM: my alarm clock rang like it was clocking in for a shift nobody hired it for — and demanding overtime.";

// The gate wants 1-200 characters, one line, no trailing newline.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.includes("\n")) {
  throw new Error(`entry fails the 1-200 char single-line gate (${ENTRY.length} chars)`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
