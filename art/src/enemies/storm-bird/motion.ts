import type { MotionDefinition } from "../../motion/types.ts";

export default {
  version: 1,
  root: [160, 210],
  groups: {
    eyes: [121, 137],
    "wing-far": [170, 176],
    "wing-near": [174, 187],
  },
  clips: {
    idle: {
      duration: 2000,
      tracks: {
        "root.y": [
          [0, 0],
          [1000, -3],
          [2000, 0],
        ],
        "group:wing-far.angle": [
          [0, -3],
          [1000, 3],
          [2000, -3],
        ],
        "group:wing-near.angle": [
          [0, 3],
          [1000, -3],
          [2000, 3],
        ],
        "group:eyes.sy": [
          [0, 1],
          [1430, 1],
          [1530, 0.08],
          [1670, 1],
          [2000, 1],
        ],
      },
    },
    attack: {
      duration: 640,
      tracks: {
        "root.x": [
          [0, 0],
          [180, 3],
          [330, -10],
          [640, 0],
        ],
        "root.y": [
          [0, 0],
          [180, -3],
          [330, 1],
          [640, 0],
        ],
        "group:wing-near.angle": [
          [0, 0],
          [180, -6],
          [330, 5],
          [640, 0],
        ],
      },
    },
    hit: {
      duration: 400,
      tracks: {
        "root.x": [
          [0, 0],
          [90, 6],
          [400, 0],
        ],
        "group:wing-near.angle": [
          [0, 0],
          [90, 5],
          [400, 0],
        ],
        "group:eyes.sy": [
          [0, 1],
          [90, 0.08],
          [260, 1],
          [400, 1],
        ],
      },
    },
    defeat: {
      duration: 1000,
      tracks: {
        "root.y": [
          [0, 0],
          [620, 10],
          [1000, 10],
        ],
        "root.angle": [
          [0, 0],
          [620, 4],
          [1000, 4],
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
