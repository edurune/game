import type { MotionDefinition } from "../../motion/types.ts";

export default {
  version: 1,
  root: [160, 282],
  groups: {
    eyes: [150, 115],
  },
  clips: {
    idle: {
      duration: 3200,
      tracks: {
        "root.angle": [
          [0, 0],
          [1600, 0.6],
          [3200, 0],
        ],
        "group:eyes.sy": [
          [0, 1],
          [2500, 1],
          [2630, 0.08],
          [2800, 1],
          [3200, 1],
        ],
      },
    },
    attack: {
      duration: 1000,
      tracks: {
        "root.x": [
          [0, 0],
          [350, 3],
          [560, -7],
          [1000, 0],
        ],
        "root.angle": [
          [0, 0],
          [350, 1.5],
          [560, -2],
          [1000, 0],
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
          [360, 1],
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
