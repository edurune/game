import type { MotionDefinition } from "../../motion/types.ts";

export default {
  version: 1,
  root: [160, 282],
  groups: {
    eyes: [144, 209],
  },
  clips: {
    idle: {
      duration: 2200,
      tracks: {
        "root.sy": [
          [0, 1],
          [1100, 0.975],
          [2200, 1],
        ],
        "group:eyes.sy": [
          [0, 1],
          [1650, 1],
          [1740, 0.08],
          [1870, 1],
          [2200, 1],
        ],
      },
    },
    attack: {
      duration: 740,
      tracks: {
        "root.sy": [
          [0, 1],
          [230, 0.94],
          [390, 1.02],
          [740, 1],
        ],
        "root.x": [
          [0, 0],
          [230, 2],
          [390, -8],
          [740, 0],
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
      duration: 900,
      tracks: {
        "root.sy": [
          [0, 1],
          [500, 0.88],
          [900, 0.88],
        ],
        "root.opacity": [
          [0, 1],
          [400, 1],
          [900, 0.3],
        ],
        "group:eyes.sy": [
          [0, 1],
          [210, 0.08],
          [900, 0.08],
        ],
      },
    },
  },
} as const satisfies MotionDefinition;
