import type { MotionDefinition } from "../../motion/types.ts";

export default {
  version: 1,
  root: [160, 282],
  groups: {
    eyes: [149, 205],
  },
  clips: {
    idle: {
      duration: 2800,
      tracks: {
        "root.angle": [
          [0, 0],
          [1400, 0.7],
          [2800, 0],
        ],
        "group:eyes.sy": [
          [0, 1],
          [2200, 1],
          [2300, 0.08],
          [2440, 1],
          [2800, 1],
        ],
      },
    },
    attack: {
      duration: 760,
      tracks: {
        "root.x": [
          [0, 0],
          [230, 4],
          [390, -10],
          [760, 0],
        ],
        "root.angle": [
          [0, 0],
          [230, 3],
          [390, -2],
          [760, 0],
        ],
      },
    },
    hit: {
      duration: 440,
      tracks: {
        "root.x": [
          [0, 0],
          [90, 6],
          [210, 2],
          [440, 0],
        ],
        "group:eyes.sy": [
          [0, 1],
          [90, 0.08],
          [260, 1],
          [440, 1],
        ],
      },
    },
    defeat: {
      duration: 900,
      tracks: {
        "root.angle": [
          [0, 0],
          [500, 5],
          [900, 5],
        ],
        "root.opacity": [
          [0, 1],
          [450, 1],
          [900, 0.3],
        ],
        "group:eyes.sy": [
          [0, 1],
          [220, 0.08],
          [900, 0.08],
        ],
      },
    },
  },
} as const satisfies MotionDefinition;
