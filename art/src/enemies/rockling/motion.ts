import type { MotionDefinition } from "../../motion/types.ts";

export default {
  version: 1,
  root: [160, 282],
  groups: {
    eyes: [146, 200],
  },
  clips: {
    idle: {
      duration: 3400,
      tracks: {
        "group:eyes.sy": [
          [0, 1],
          [2710, 1],
          [2850, 0.08],
          [3030, 1],
          [3400, 1],
        ],
      },
    },
    attack: {
      duration: 950,
      tracks: {
        "root.x": [
          [0, 0],
          [330, 3],
          [540, -8],
          [950, 0],
        ],
        "root.angle": [
          [0, 0],
          [330, 2],
          [540, -2],
          [950, 0],
        ],
      },
    },
    hit: {
      duration: 500,
      tracks: {
        "root.x": [
          [0, 0],
          [120, 3],
          [500, 0],
        ],
        "group:eyes.sy": [
          [0, 1],
          [120, 0.1],
          [340, 1],
          [500, 1],
        ],
      },
    },
    defeat: {
      duration: 1100,
      tracks: {
        "root.angle": [
          [0, 0],
          [650, 4],
          [1100, 4],
        ],
        "root.opacity": [
          [0, 1],
          [550, 1],
          [1100, 0.3],
        ],
        "group:eyes.sy": [
          [0, 1],
          [270, 0.08],
          [1100, 0.08],
        ],
      },
    },
  },
} as const satisfies MotionDefinition;
