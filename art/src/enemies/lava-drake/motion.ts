import type { MotionDefinition } from "../../motion/types.ts";

export default {
  version: 1,
  root: [160, 282],
  groups: {
    eyes: [98, 122],
    wing: [195, 161],
    tail: [211, 251],
  },
  clips: {
    idle: {
      duration: 3400,
      tracks: {
        "group:wing.angle": [
          [0, 0],
          [1700, -1.5],
          [3400, 0],
        ],
        "group:tail.angle": [
          [0, 0],
          [1700, -1],
          [3400, 0],
        ],
        "group:eyes.sy": [
          [0, 1],
          [2660, 1],
          [2800, 0.08],
          [2990, 1],
          [3400, 1],
        ],
      },
    },
    attack: {
      duration: 980,
      tracks: {
        "root.x": [
          [0, 0],
          [330, 3],
          [550, -7],
          [980, 0],
        ],
        "group:wing.angle": [
          [0, 0],
          [330, 3],
          [550, -4],
          [980, 0],
        ],
        "group:tail.angle": [
          [0, 0],
          [550, -2],
          [980, 0],
        ],
      },
    },
    hit: {
      duration: 560,
      tracks: {
        "root.x": [
          [0, 0],
          [130, 3],
          [560, 0],
        ],
        "group:eyes.sy": [
          [0, 1],
          [130, 0.08],
          [370, 1],
          [560, 1],
        ],
      },
    },
    defeat: {
      duration: 1300,
      tracks: {
        "root.angle": [
          [0, 0],
          [800, 2.5],
          [1300, 2.5],
        ],
        "group:wing.angle": [
          [0, 0],
          [800, 4],
          [1300, 4],
        ],
        "root.opacity": [
          [0, 1],
          [600, 1],
          [1300, 0.3],
        ],
        "group:eyes.sy": [
          [0, 1],
          [340, 0.08],
          [1300, 0.08],
        ],
      },
    },
  },
} as const satisfies MotionDefinition;
