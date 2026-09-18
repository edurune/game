import type { MotionDefinition } from "../../motion/types.ts";

export default {
  version: 1,
  root: [160, 210],
  groups: {
    eyes: [142, 184],
  },
  clips: {
    idle: {
      duration: 3000,
      tracks: {
        "root.y": [
          [0, 0],
          [1500, -5],
          [3000, 0],
        ],
        "root.angle": [
          [0, -1],
          [1500, 1],
          [3000, -1],
        ],
        "group:eyes.sy": [
          [0, 1],
          [2320, 1],
          [2440, 0.08],
          [2600, 1],
          [3000, 1],
        ],
      },
    },
    attack: {
      duration: 760,
      tracks: {
        "root.x": [
          [0, 0],
          [220, 3],
          [400, -9],
          [760, 0],
        ],
        "root.angle": [
          [0, 0],
          [220, 3],
          [400, -3],
          [760, 0],
        ],
      },
    },
    hit: {
      duration: 460,
      tracks: {
        "root.x": [
          [0, 0],
          [100, 6],
          [460, 0],
        ],
        "root.angle": [
          [0, 0],
          [100, 4],
          [460, 0],
        ],
      },
    },
    defeat: {
      duration: 1100,
      tracks: {
        "root.y": [
          [0, 0],
          [700, -12],
          [1100, -12],
        ],
        "root.opacity": [
          [0, 1],
          [400, 1],
          [1100, 0.3],
        ],
        "group:eyes.sy": [
          [0, 1],
          [260, 0.08],
          [1100, 0.08],
        ],
      },
    },
  },
} as const satisfies MotionDefinition;
