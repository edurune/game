import type { MotionDefinition } from "../../motion/types.ts";

export default {
  version: 1,
  root: [160, 282],
  groups: {
    eyes: [94, 178],
    tail: [211, 207],
  },
  clips: {
    idle: {
      duration: 2600,
      tracks: {
        "group:tail.angle": [
          [0, 0],
          [1300, -3],
          [2600, 0],
        ],
        "group:eyes.sy": [
          [0, 1],
          [1980, 1],
          [2080, 0.08],
          [2220, 1],
          [2600, 1],
        ],
      },
    },
    attack: {
      duration: 620,
      tracks: {
        "root.x": [
          [0, 0],
          [170, 3],
          [300, -10],
          [620, 0],
        ],
        "root.y": [
          [0, 0],
          [170, 0],
          [300, -4],
          [620, 0],
        ],
        "group:tail.angle": [
          [0, 0],
          [300, 5],
          [620, 0],
        ],
      },
    },
    hit: {
      duration: 380,
      tracks: {
        "root.x": [
          [0, 0],
          [80, 5],
          [380, 0],
        ],
        "group:eyes.sy": [
          [0, 1],
          [80, 0.08],
          [240, 1],
          [380, 1],
        ],
      },
    },
    defeat: {
      duration: 950,
      tracks: {
        "root.angle": [
          [0, 0],
          [550, 4],
          [950, 4],
        ],
        "root.opacity": [
          [0, 1],
          [450, 1],
          [950, 0.3],
        ],
        "group:eyes.sy": [
          [0, 1],
          [230, 0.08],
          [950, 0.08],
        ],
      },
    },
  },
} as const satisfies MotionDefinition;
