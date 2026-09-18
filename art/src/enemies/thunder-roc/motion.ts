import type { MotionDefinition } from "../../motion/types.ts";

export default {
  version: 1,
  root: [160, 282],
  groups: {
    eyes: [130, 111],
    "wing-far": [184, 170],
    "wing-near": [141, 172],
  },
  clips: {
    idle: {
      duration: 3000,
      tracks: {
        "group:wing-far.angle": [
          [0, 0],
          [1500, -2],
          [3000, 0],
        ],
        "group:wing-near.angle": [
          [0, 0],
          [1500, 2],
          [3000, 0],
        ],
        "group:eyes.sy": [
          [0, 1],
          [2320, 1],
          [2450, 0.08],
          [2620, 1],
          [3000, 1],
        ],
      },
    },
    attack: {
      duration: 900,
      tracks: {
        "root.x": [
          [0, 0],
          [290, 3],
          [500, -7],
          [900, 0],
        ],
        "group:wing-far.angle": [
          [0, 0],
          [290, 3],
          [500, -5],
          [900, 0],
        ],
        "group:wing-near.angle": [
          [0, 0],
          [290, -4],
          [500, 6],
          [900, 0],
        ],
      },
    },
    hit: {
      duration: 520,
      tracks: {
        "root.x": [
          [0, 0],
          [120, 3],
          [520, 0],
        ],
        "group:wing-near.angle": [
          [0, 0],
          [120, -3],
          [520, 0],
        ],
        "group:eyes.sy": [
          [0, 1],
          [120, 0.08],
          [340, 1],
          [520, 1],
        ],
      },
    },
    defeat: {
      duration: 1200,
      tracks: {
        "root.angle": [
          [0, 0],
          [740, 3],
          [1200, 3],
        ],
        "group:wing-near.angle": [
          [0, 0],
          [740, -4],
          [1200, -4],
        ],
        "root.opacity": [
          [0, 1],
          [550, 1],
          [1200, 0.3],
        ],
        "group:eyes.sy": [
          [0, 1],
          [300, 0.08],
          [1200, 0.08],
        ],
      },
    },
  },
} as const satisfies MotionDefinition;
