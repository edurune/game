import type { MotionDefinition } from "../../motion/types.ts";

export default {
  version: 1,
  root: [160, 282],
  groups: {
    eyes: [143, 170],
    tail: [184, 246],
  },
  clips: {
    idle: {
      duration: 2300,
      tracks: {
        "group:tail.angle": [
          [0, 0],
          [1150, -4],
          [2300, 0],
        ],
        "group:eyes.sy": [
          [0, 1],
          [1690, 1],
          [1790, 0.08],
          [1930, 1],
          [2300, 1],
        ],
      },
    },
    attack: {
      duration: 680,
      tracks: {
        "root.x": [
          [0, 0],
          [190, 3],
          [350, -8],
          [680, 0],
        ],
        "root.angle": [
          [0, 0],
          [190, 2],
          [350, -2],
          [680, 0],
        ],
        "group:tail.angle": [
          [0, 0],
          [350, 5],
          [680, 0],
        ],
      },
    },
    hit: {
      duration: 400,
      tracks: {
        "root.x": [
          [0, 0],
          [90, 6],
          [400, 0],
        ],
        "group:eyes.sy": [
          [0, 1],
          [90, 0.08],
          [260, 1],
          [400, 1],
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
