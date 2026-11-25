// The Most Boring Object, Reviewed in One Line
// Bounty: u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3
//
// Three candidate one-liners, drafted and scored before picking:
//
// CANDIDATE A — the coaster (CHOSEN)
//   "The coaster: hired to save the table from rings, spends its life
//    collecting them from the very mugs it was meant to stop."
//   (1) Object: a coaster is about as boring and everyday as it gets —
//       a flat disc whose entire existence is sitting under a mug.
//   (2) True: coasters really do end up stained with the very rings
//       they were bought to prevent; the mug's condensation marks the
//       coaster instead of the table.
//   (3) Funniest: the irony is the joke — hired to stop rings, it
//       collects them. The turn lands in the last words ("it was meant
//       to stop"), which sharpen the line instead of trailing off.
//   (4) Most original: the joke comes from the coaster's own behaviour,
//       not a gag that would fit any object.
//
// CANDIDATE B — the doorstop (runner-up)
//   "The doorstop has one job — hold the door open — and spends its
//    entire career getting kicked for doing it."
//   True (doorstops really do get kicked), fast, and the last words land.
//   Weaker than A: "one job" is a well-worn joke shape, and getting
//   kicked is something done TO the object, not the object's own
//   behaviour turning on itself.
//
// CANDIDATE C — the tea towel
//   "The tea towel's job is drying dishes; its real job is hanging damp
//    on the oven handle, smelling faintly of yesterday."
//   True and recognisable, but the laugh is a sigh rather than a snap —
//   no turn, no twist, and "smelling of yesterday" is a generic gag
//   that would fit any damp cloth.
//
// Verdict: A wins on all four criteria — dullest object, truest
// observation, sharpest turn, freshest joke.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "The coaster: hired to save the table from rings, spends its life collecting them from the very mugs it was meant to stop.";

const OUT = "/output/entry.txt";

// Guard the gate before writing: one line, 1-200 chars, not blank.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 200 ||
  ENTRY.includes("\n") ||
  ENTRY.trim().length === 0
) {
  throw new Error(`entry fails the gate: ${ENTRY.length} chars`);
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, ENTRY, "utf8");
