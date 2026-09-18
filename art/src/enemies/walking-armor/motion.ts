import type { MotionDefinition } from "../../motion/types.ts";

export default {
  version: 1,
  root: [160, 282],
  groups: {
    eyes: [153, 148],
  },
  clips: {
    idle: {
      duration: 3400,
      tracks: {
        "group:eyes.opacity": [
          [0, 1],
          [1700, 0.7],
          [3400, 1],
        ],
      },
    },
    attack: {
      duration: 900,
      tracks: {
        "root.x": [
          [0, 0],
          [300, 3],
          [500, -8],
          [900, 0],
        ],
        "root.angle": [
          [0, 0],
          [300, 1.5],
          [500, -2],
          [900, 0],
        ],
      },
    },
    hit: {
      duration: 520,
      tracks: {
        "root.x": [
          [0, 0],
          [120, 3],
          [520, 0],
        ],
        "group:eyes.opacity": [
          [0, 1],
          [120, 0.5],
          [340, 1],
          [520, 1],
        ],
      },
    },
    defeat: {
      duration: 1200,
      tracks: {
        "root.angle": [
          [0, 0],
          [700, 4],
          [1200, 4],
        ],
        "root.opacity": [
          [0, 1],
          [550, 1],
          [1200, 0.3],
        ],
        "group:eyes.opacity": [
          [0, 1],
          [600, 0],
          [1200, 0],
        ],
      },
    },
  },
} as const satisfies MotionDefinition;
