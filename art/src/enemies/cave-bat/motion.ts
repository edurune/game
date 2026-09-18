import type { MotionDefinition } from "../../motion/types.ts";

export default {
  version: 1,
  root: [160, 220],
  groups: {
    eyes: [149, 190],
    "wing-far": [178, 190],
    "wing-near": [140, 190],
  },
  clips: {
    idle: {
      duration: 1600,
      tracks: {
        "root.y": [
          [0, 0],
          [400, -4],
          [800, 0],
          [1200, -4],
          [1600, 0],
        ],
        "group:wing-far.angle": [
          [0, 0],
          [400, -12],
          [800, 0],
          [1200, -12],
          [1600, 0],
        ],
        "group:wing-near.angle": [
          [0, 0],
          [400, 12],
          [800, 0],
          [1200, 12],
          [1600, 0],
        ],
        "group:eyes.sy": [
          [0, 1],
          [1250, 1],
          [1330, 0.08],
          [1410, 1],
          [1600, 1],
        ],
      },
    },
    attack: {
      duration: 720,
      tracks: {
        "root.x": [
          [0, 0],
          [200, 5],
          [380, -19],
          [540, -12],
          [720, 0],
        ],
        "root.y": [
          [0, 0],
          [200, -8],
          [380, 8],
          [540, 0],
          [720, 0],
        ],
        "group:wing-far.angle": [
          [0, 0],
          [200, -16],
          [380, 8],
          [720, 0],
        ],
        "group:wing-near.angle": [
          [0, 0],
          [200, 16],
          [380, -8],
          [720, 0],
        ],
      },
    },
    hit: {
      duration: 480,
      tracks: {
        "root.x": [
          [0, 0],
          [90, 8],
          [220, 2],
          [480, 0],
        ],
        "root.angle": [
          [0, 0],
          [90, 5],
          [220, -2],
          [480, 0],
        ],
        "group:eyes.sy": [
          [0, 1],
          [90, 0.08],
          [240, 1],
          [480, 1],
        ],
      },
    },
    defeat: {
      duration: 1100,
      tracks: {
        "root.y": [
          [0, 0],
          [700, 18],
          [1100, 18],
        ],
        "root.opacity": [
          [0, 1],
          [500, 1],
          [1100, 0.3],
        ],
        "group:wing-far.angle": [
          [0, 0],
          [700, 16],
          [1100, 16],
        ],
        "group:wing-near.angle": [
          [0, 0],
          [700, -16],
          [1100, -16],
        ],
        "group:eyes.sy": [
          [0, 1],
          [300, 0.08],
          [1100, 0.08],
        ],
      },
    },
  },
} as const satisfies MotionDefinition;
