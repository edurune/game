import type { MotionDefinition } from "../../motion/types.ts";

export default {
  version: 1,
  root: [160, 282],
  groups: {
    eyes: [144, 141],
    lid: [210, 183],
  },
  clips: {
    idle: {
      duration: 2900,
      tracks: {
        "group:lid.angle": [
          [0, 0],
          [1450, 1.5],
          [2900, 0],
        ],
        "group:eyes.sy": [
          [0, 1],
          [2210, 1],
          [2320, 0.08],
          [2480, 1],
          [2900, 1],
        ],
      },
    },
    attack: {
      duration: 800,
      tracks: {
        "root.x": [
          [0, 0],
          [270, 2],
          [440, -7],
          [800, 0],
        ],
        "group:lid.angle": [
          [0, 0],
          [270, 10],
          [440, -2],
          [800, 0],
        ],
      },
    },
    hit: {
      duration: 470,
      tracks: {
        "root.x": [
          [0, 0],
          [100, 4],
          [470, 0],
        ],
        "group:lid.angle": [
          [0, 0],
          [100, 4],
          [470, 0],
        ],
      },
    },
    defeat: {
      duration: 1000,
      tracks: {
        "group:lid.angle": [
          [0, 0],
          [550, -3],
          [1000, -3],
        ],
        "root.opacity": [
          [0, 1],
          [450, 1],
          [1000, 0.3],
        ],
        "group:eyes.sy": [
          [0, 1],
          [240, 0.08],
          [1000, 0.08],
        ],
      },
    },
  },
} as const satisfies MotionDefinition;
