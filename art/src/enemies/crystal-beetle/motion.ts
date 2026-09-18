import type { MotionDefinition } from "../../motion/types.ts";

export default {
  version: 1,
  root: [160, 282],
  groups: {
    eyes: [97, 224],
  },
  clips: {
    idle: {
      duration: 3100,
      tracks: {
        "group:eyes.sy": [
          [0, 1],
          [2400, 1],
          [2510, 0.08],
          [2660, 1],
          [3100, 1],
        ],
      },
    },
    attack: {
      duration: 850,
      tracks: {
        "root.x": [
          [0, 0],
          [280, 3],
          [450, -9],
          [850, 0],
        ],
        "root.angle": [
          [0, 0],
          [280, 1],
          [450, -1],
          [850, 0],
        ],
      },
    },
    hit: {
      duration: 440,
      tracks: {
        "root.x": [
          [0, 0],
          [100, 3],
          [440, 0],
        ],
        "group:eyes.sy": [
          [0, 1],
          [100, 0.08],
          [280, 1],
          [440, 1],
        ],
      },
    },
    defeat: {
      duration: 1000,
      tracks: {
        "root.angle": [
          [0, 0],
          [550, 4],
          [1000, 4],
        ],
        "root.opacity": [
          [0, 1],
          [480, 1],
          [1000, 0.3],
        ],
        "group:eyes.sy": [
          [0, 1],
          [220, 0.08],
          [1000, 0.08],
        ],
      },
    },
  },
} as const satisfies MotionDefinition;
