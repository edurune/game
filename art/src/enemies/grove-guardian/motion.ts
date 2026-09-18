import type { MotionDefinition } from "../../motion/types.ts";

export default {
  version: 1,
  root: [160, 282],
  groups: {
    eyes: [143, 182],
  },
  clips: {
    idle: {
      duration: 3800,
      tracks: {
        "root.angle": [
          [0, 0],
          [1900, 0.5],
          [3800, 0],
        ],
        "group:eyes.sy": [
          [0, 1],
          [3100, 1],
          [3250, 0.08],
          [3420, 1],
          [3800, 1],
        ],
      },
    },
    attack: {
      duration: 1100,
      tracks: {
        "root.x": [
          [0, 0],
          [400, 3],
          [620, -7],
          [1100, 0],
        ],
        "root.angle": [
          [0, 0],
          [400, 1.5],
          [620, -1.5],
          [1100, 0],
        ],
      },
    },
    hit: {
      duration: 620,
      tracks: {
        "root.x": [
          [0, 0],
          [150, 3],
          [350, 1],
          [620, 0],
        ],
        "group:eyes.sy": [
          [0, 1],
          [150, 0.15],
          [410, 1],
          [620, 1],
        ],
      },
    },
    defeat: {
      duration: 1400,
      tracks: {
        "root.angle": [
          [0, 0],
          [850, 3],
          [1400, 3],
        ],
        "root.opacity": [
          [0, 1],
          [700, 1],
          [1400, 0.3],
        ],
        "group:eyes.sy": [
          [0, 1],
          [400, 0.08],
          [1400, 0.08],
        ],
      },
    },
  },
} as const satisfies MotionDefinition;
