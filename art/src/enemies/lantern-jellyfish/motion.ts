import type { MotionDefinition } from "../../motion/types.ts";

export default {
  version: 1,
  root: [160, 200],
  groups: {
    eyes: [139, 180],
    tentacles: [158, 204],
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
        "group:tentacles.angle": [
          [0, -2],
          [1500, 2],
          [3000, -2],
        ],
        "group:eyes.sy": [
          [0, 1],
          [2350, 1],
          [2450, 0.08],
          [2600, 1],
          [3000, 1],
        ],
      },
    },
    attack: {
      duration: 880,
      tracks: {
        "root.x": [
          [0, 0],
          [280, 3],
          [470, -9],
          [880, 0],
        ],
        "group:tentacles.angle": [
          [0, 0],
          [280, 5],
          [470, -5],
          [880, 0],
        ],
      },
    },
    hit: {
      duration: 500,
      tracks: {
        "root.x": [
          [0, 0],
          [110, 7],
          [500, 0],
        ],
        "root.angle": [
          [0, 0],
          [110, 3],
          [500, 0],
        ],
      },
    },
    defeat: {
      duration: 1100,
      tracks: {
        "root.y": [
          [0, 0],
          [750, 10],
          [1100, 10],
        ],
        "root.opacity": [
          [0, 1],
          [450, 1],
          [1100, 0.3],
        ],
        "group:eyes.sy": [
          [0, 1],
          [250, 0.08],
          [1100, 0.08],
        ],
      },
    },
  },
} as const satisfies MotionDefinition;
