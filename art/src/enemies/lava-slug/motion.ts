import type { MotionDefinition } from "../../motion/types.ts";

export default {
  version: 1,
  root: [160, 282],
  groups: {
    eyes: [102, 173],
  },
  clips: {
    idle: {
      duration: 3400,
      tracks: {
        "root.sy": [
          [0, 1],
          [1700, 0.985],
          [3400, 1],
        ],
        "group:eyes.sy": [
          [0, 1],
          [2700, 1],
          [2840, 0.08],
          [3020, 1],
          [3400, 1],
        ],
      },
    },
    attack: {
      duration: 950,
      tracks: {
        "root.sy": [
          [0, 1],
          [330, 0.96],
          [540, 1.015],
          [950, 1],
        ],
        "root.x": [
          [0, 0],
          [330, 2],
          [540, -7],
          [950, 0],
        ],
      },
    },
    hit: {
      duration: 540,
      tracks: {
        "root.x": [
          [0, 0],
          [130, 4],
          [540, 0],
        ],
        "root.sy": [
          [0, 1],
          [130, 0.96],
          [540, 1],
        ],
      },
    },
    defeat: {
      duration: 1200,
      tracks: {
        "root.sy": [
          [0, 1],
          [700, 0.9],
          [1200, 0.9],
        ],
        "root.opacity": [
          [0, 1],
          [550, 1],
          [1200, 0.3],
        ],
        "group:eyes.sy": [
          [0, 1],
          [300, 0.08],
          [1200, 0.08],
        ],
      },
    },
  },
} as const satisfies MotionDefinition;
