import type { MotionDefinition } from "../../motion/types.ts";

export default {
  version: 1,
  root: [160, 282],
  groups: {
    eyes: [149, 190],
    arm: [122, 204],
  },
  clips: {
    idle: {
      duration: 3300,
      tracks: {
        "group:arm.angle": [
          [0, 0],
          [1650, 1.5],
          [3300, 0],
        ],
        "group:eyes.sy": [
          [0, 1],
          [2600, 1],
          [2720, 0.08],
          [2880, 1],
          [3300, 1],
        ],
      },
    },
    attack: {
      duration: 850,
      tracks: {
        "root.x": [
          [0, 0],
          [290, 2],
          [460, -6],
          [850, 0],
        ],
        "group:arm.angle": [
          [0, 0],
          [290, 5],
          [460, -5],
          [850, 0],
        ],
      },
    },
    hit: {
      duration: 480,
      tracks: {
        "root.x": [
          [0, 0],
          [110, 4],
          [480, 0],
        ],
        "group:eyes.sy": [
          [0, 1],
          [110, 0.08],
          [310, 1],
          [480, 1],
        ],
      },
    },
    defeat: {
      duration: 1100,
      tracks: {
        "root.angle": [
          [0, 0],
          [650, 3],
          [1100, 3],
        ],
        "root.opacity": [
          [0, 1],
          [550, 1],
          [1100, 0.3],
        ],
        "group:eyes.sy": [
          [0, 1],
          [300, 0.08],
          [1100, 0.08],
        ],
      },
    },
  },
} as const satisfies MotionDefinition;
