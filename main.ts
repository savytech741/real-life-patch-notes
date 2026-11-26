// Real-Life Patch Notes: The Comedy Changelog — entry for make.fun bounty
// u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d
//
// One line: a software patch note for a bug in real life — the brain
// replaying an embarrassing moment from 2009 every night at 3 a.m.
// Deadpan release-note register: a version number, "fixed a bug where ...",
// stated as if it shipped. The joke is specific and recognisable: the
// brain as buggy software, endlessly re-running a decade-old embarrassment
// at 3 a.m. for no reason.
//
// The program writes that line to $MAKEFUN_OUTPUT_DIR/entry.txt (default
// /output/entry.txt) and prints it to stdout.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "v3.1.4: fixed a bug where the brain replayed an embarrassing moment from 2009 every night at 3 a.m. for no reason.";

function writeEntry(outputDir: string): string {
  const target = join(outputDir, "entry.txt");
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(target, entry + "\n", "utf8");
  return target;
}

writeEntry(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
console.log(entry);
