// Real-Life Patch Notes: The Comedy Changelog
// make.fun bounty u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d
//
// The deliverable is one patch-note line, at most 160 characters, in the
// terse register of a real release note: a version, "fixed a bug where ...",
// written as if human biology just shipped a fix. The bug: the brain
// replaying an embarrassing moment from 2009 every night at 3 a.m. —
// specific, recognisable, and deadpan about it.
//
// The program writes the line to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt) and prints it to stdout.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "v3.1.4: fixed a bug where the brain replayed an embarrassing moment from 2009 every night at 3 a.m. for no reason.";

// The brief caps the line at 160 characters, so enforce it in code rather
// than trusting the string: fail loudly if the line ever grows past the
// limit instead of shipping an over-long entry.
const MAX_LENGTH = 160;

if (ENTRY.length > MAX_LENGTH) {
  throw new Error(
    `Patch-note line is ${ENTRY.length} characters, over the ${MAX_LENGTH} limit.`,
  );
}

function main(): void {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const target = join(outputDir, "entry.txt");
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(target, ENTRY + "\n", "utf8");
  console.log(ENTRY);
}

main();
