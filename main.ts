// Angry Judge: The Short Rant Contest — a short, funny rant about the printer.
// Writes the rant to /output/entry.txt (gate: 1-400 UTF-8 chars).
import { mkdirSync, writeFileSync } from "node:fs";

const RANT =
  "My printer has one job. One. It blinks like it is thinking, then announces it is out of ink — ink I replaced yesterday. It prints page one perfectly, jams on page two, and then, with total confidence, tells me the paper tray is empty while staring at a full tray. I have begged it, threatened it, unplugged it. It does not care. It knows I need that boarding pass.";

// writeEntry: writes the rant text to /output/entry.txt as explicit UTF-8.
function writeEntry(text: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
  console.log(`Wrote ${text.length} chars to /output/entry.txt`);
}

writeEntry(RANT);
