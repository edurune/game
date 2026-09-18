import type { MotionDefinition } from "../../motion/types.ts";

export default {
  version: 1,
  root: [160, 210],
  groups: {
    eyes: [139, 183],
  },
  clips: {
    idle: {
      duration: 2600,
      tracks: {
        "root.y": [
          [0, 0],
          [1300, -4],
          [2600, 0],
        ],
        "root.sy": [
          [0, 1],
          [1300, 0.985],
          [2600, 1],
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
      duration: 720,
      tracks: {
        "root.x": [
          [0, 0],
          [220, 3],
          [380, -9],
          [720, 0],
        ],
        "root.sy": [
          [0, 1],
          [220, 0.96],
          [380, 1.02],
          [720, 1],
        ],
      },
    },
    hit: {
      duration: 420,
      tracks: {
        "root.x": [
          [0, 0],
          [90, 6],
          [420, 0],
        ],
        "root.sy": [
          [0, 1],
          [90, 0.95],
          [420, 1],
        ],
      },
    },
    defeat: {
      duration: 1000,
      tracks: {
        "root.y": [
          [0, 0],
          [600, 10],
          [1000, 10],
        ],
        "root.sy": [
          [0, 1],
          [600, 0.92],
          [1000, 0.92],
        ],
        "root.opacity": [
          [0, 1],
          [450, 1],
          [1000, 0.3],
        ],
        "group:eyes.sy": [
          [0, 1],
          [240, 0.08],
          [1000, 0.08],
        ],
      },
    },
  },
} as const satisfies MotionDefinition;
