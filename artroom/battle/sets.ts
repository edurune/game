import type { ReviewSet } from "./types.ts";

export default [
  {
    region: "forest-clearing",
    enemies: ["moss-slime", "acornling", "capling"],
    boss: "grove-guardian",
  },
  {
    region: "tidal-shore",
    enemies: ["sand-crab", "lantern-jellyfish", "reef-serpent"],
    boss: "tide-titan",
  },
  {
    region: "crystal-depths",
    enemies: ["cave-bat", "crystal-beetle", "rockling"],
    boss: "crystal-golem",
  },
  {
    region: "dune-basin",
    enemies: ["dune-scorpion", "sand-spirit", "cactus-sentry"],
    boss: "sand-wyrm",
  },
  {
    region: "frost-pass",
    enemies: ["snow-puff", "frost-wolf", "penguin-guard"],
    boss: "snow-yeti",
  },
  {
    region: "quiet-ruins",
    enemies: ["ruin-wisp", "walking-armor", "ruin-mimic"],
    boss: "stone-sentinel",
  },
  {
    region: "ember-caldera",
    enemies: ["ember-imp", "lava-slug", "ash-hound"],
    boss: "lava-drake",
  },
  {
    region: "cloud-court",
    enemies: ["cloudling", "storm-bird", "wind-sprite"],
    boss: "thunder-roc",
  },
] as const satisfies readonly ReviewSet[];
