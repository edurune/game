import type { MotionDefinition } from "../../motion/types.ts";

export default {
  version: 1,
  root: [160, 282],
  groups: {
    eyes: [155, 113],
    shield: [98, 170],
  },
  clips: {
    idle: {
      duration: 3600,
      tracks: {
        "group:shield.angle": [
          [0, 0],
          [1800, 1],
          [3600, 0],
        ],
        "group:eyes.opacity": [
          [0, 1],
          [1800, 0.7],
          [3600, 1],
        ],
      },
    },
    attack: {
      duration: 1050,
      tracks: {
        "root.x": [
          [0, 0],
          [380, 3],
          [600, -7],
          [1050, 0],
        ],
        "group:shield.angle": [
          [0, 0],
          [380, 3],
          [600, -6],
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
        "group:shield.angle": [
          [0, 0],
          [140, -4],
          [600, 0],
        ],
      },
    },
    defeat: {
      duration: 1350,
      tracks: {
        "root.angle": [
          [0, 0],
          [800, 3],
          [1350, 3],
        ],
        "root.opacity": [
          [0, 1],
          [650, 1],
          [1350, 0.3],
        ],
        "group:eyes.opacity": [
          [0, 1],
          [700, 0],
          [1350, 0],
        ],
      },
    },
  },
} as const satisfies MotionDefinition;
