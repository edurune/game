import type { MotionDefinition } from "../../motion/types.ts";

export default {
  version: 1,
  root: [160, 282],
  groups: {
    eyes: [95, 103],
    tail: [175, 258],
  },
  clips: {
    idle: {
      duration: 3600,
      tracks: {
        "group:tail.angle": [
          [0, 0],
          [1800, -1.5],
          [3600, 0],
        ],
        "group:eyes.sy": [
          [0, 1],
          [2870, 1],
          [3000, 0.08],
          [3170, 1],
          [3600, 1],
        ],
      },
    },
    attack: {
      duration: 1000,
      tracks: {
        "root.x": [
          [0, 0],
          [350, 3],
          [550, -7],
          [1000, 0],
        ],
        "root.angle": [
          [0, 0],
          [350, 1],
          [550, -1.5],
          [1000, 0],
        ],
        "group:tail.angle": [
          [0, 0],
          [550, -3],
          [1000, 0],
        ],
      },
    },
    hit: {
      duration: 560,
      tracks: {
        "root.x": [
          [0, 0],
          [130, 4],
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
          [800, 3],
          [1300, 3],
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
