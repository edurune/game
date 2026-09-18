import type { MotionDefinition } from "../../motion/types.ts";

export default {
  version: 1,
  root: [160, 282],
  groups: {
    eyes: [84, 180],
    tail: [223, 216],
  },
  clips: {
    idle: {
      duration: 2400,
      tracks: {
        "group:tail.angle": [
          [0, 0],
          [1200, -3],
          [2400, 0],
        ],
        "group:eyes.sy": [
          [0, 1],
          [1800, 1],
          [1900, 0.08],
          [2040, 1],
          [2400, 1],
        ],
      },
    },
    attack: {
      duration: 600,
      tracks: {
        "root.x": [
          [0, 0],
          [160, 3],
          [290, -10],
          [600, 0],
        ],
        "root.y": [
          [0, 0],
          [160, 0],
          [290, -4],
          [600, 0],
        ],
        "group:tail.angle": [
          [0, 0],
          [290, 5],
          [600, 0],
        ],
      },
    },
    hit: {
      duration: 380,
      tracks: {
        "root.x": [
          [0, 0],
          [80, 5],
          [380, 0],
        ],
        "group:eyes.sy": [
          [0, 1],
          [80, 0.08],
          [240, 1],
          [380, 1],
        ],
      },
    },
    defeat: {
      duration: 950,
      tracks: {
        "root.angle": [
          [0, 0],
          [550, 4],
          [950, 4],
        ],
        "root.opacity": [
          [0, 1],
          [450, 1],
          [950, 0.3],
        ],
        "group:eyes.sy": [
          [0, 1],
          [230, 0.08],
          [950, 0.08],
        ],
      },
    },
  },
} as const satisfies MotionDefinition;
