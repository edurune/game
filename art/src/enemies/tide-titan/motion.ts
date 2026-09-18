import type { MotionDefinition } from "../../motion/types.ts";

export default {
  version: 1,
  root: [160, 282],
  groups: {
    eyes: [127, 150],
  },
  clips: {
    idle: {
      duration: 3600,
      tracks: {
        "root.angle": [
          [0, 0],
          [1800, 0.5],
          [3600, 0],
        ],
        "group:eyes.sy": [
          [0, 1],
          [2850, 1],
          [2990, 0.08],
          [3170, 1],
          [3600, 1],
        ],
      },
    },
    attack: {
      duration: 1050,
      tracks: {
        "root.x": [
          [0, 0],
          [370, 3],
          [580, -7],
          [1050, 0],
        ],
        "root.angle": [
          [0, 0],
          [370, 2],
          [580, -1.5],
          [1050, 0],
        ],
      },
    },
    hit: {
      duration: 600,
      tracks: {
        "root.x": [
          [0, 0],
          [140, 3],
          [600, 0],
        ],
        "group:eyes.sy": [
          [0, 1],
          [140, 0.15],
          [380, 1],
          [600, 1],
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
          [650, 1],
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
