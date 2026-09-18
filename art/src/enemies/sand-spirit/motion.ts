import type { MotionDefinition } from "../../motion/types.ts";

export default {
  version: 1,
  root: [160, 210],
  groups: {
    eyes: [144, 179],
  },
  clips: {
    idle: {
      duration: 3200,
      tracks: {
        "root.y": [
          [0, 0],
          [1600, -4],
          [3200, 0],
        ],
        "root.angle": [
          [0, -0.7],
          [1600, 0.7],
          [3200, -0.7],
        ],
        "group:eyes.sy": [
          [0, 1],
          [2480, 1],
          [2600, 0.08],
          [2760, 1],
          [3200, 1],
        ],
      },
    },
    attack: {
      duration: 800,
      tracks: {
        "root.x": [
          [0, 0],
          [240, 4],
          [420, -10],
          [800, 0],
        ],
        "root.angle": [
          [0, 0],
          [240, 3],
          [420, -3],
          [800, 0],
        ],
      },
    },
    hit: {
      duration: 480,
      tracks: {
        "root.x": [
          [0, 0],
          [100, 6],
          [480, 0],
        ],
        "group:eyes.sy": [
          [0, 1],
          [100, 0.08],
          [300, 1],
          [480, 1],
        ],
      },
    },
    defeat: {
      duration: 1100,
      tracks: {
        "root.y": [
          [0, 0],
          [650, 10],
          [1100, 10],
        ],
        "root.sy": [
          [0, 1],
          [650, 0.92],
          [1100, 0.92],
        ],
        "root.opacity": [
          [0, 1],
          [450, 1],
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
