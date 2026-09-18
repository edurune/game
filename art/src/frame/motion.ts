import type { MotionDefinition } from "../motion/types.ts";

export default {
  version: 1,
  root: [160, 282],
  groups: {
    eyes: [160, 109],
  },
  clips: {
    idle: {
      duration: 3200,
      tracks: {
        "anchor:shoulder-near.angle": [
          [0, 0],
          [1600, -2],
          [3200, 0],
        ],
        "anchor:shoulder-far.angle": [
          [0, 0],
          [1600, 2],
          [3200, 0],
        ],
        "group:eyes.sy": [
          [0, 1],
          [2320, 1],
          [2400, 0.08],
          [2480, 1],
          [3200, 1],
        ],
      },
    },
    attack: {
      duration: 720,
      tracks: {
        "root.x": [
          [0, 0],
          [200, -5],
          [350, 18],
          [520, 12],
          [720, 0],
        ],
        "anchor:shoulder-near.angle": [
          [0, 0],
          [200, 14],
          [350, -30],
          [500, -24],
          [720, 0],
        ],
        "anchor:shoulder-far.angle": [
          [0, 0],
          [200, -6],
          [350, 10],
          [720, 0],
        ],
      },
    },
    hit: {
      duration: 480,
      tracks: {
        "root.x": [
          [0, 0],
          [90, -9],
          [230, -3],
          [480, 0],
        ],
        "root.angle": [
          [0, 0],
          [90, -3],
          [230, 1],
          [480, 0],
        ],
        "group:eyes.sy": [
          [0, 1],
          [70, 0.08],
          [180, 0.08],
          [300, 1],
          [480, 1],
        ],
      },
    },
    defeat: {
      duration: 1100,
      tracks: {
        "root.angle": [
          [0, 0],
          [350, -3],
          [850, -12],
          [1100, -12],
        ],
        "root.opacity": [
          [0, 1],
          [450, 1],
          [1100, 0.3],
        ],
        "anchor:shoulder-near.angle": [
          [0, 0],
          [600, 8],
          [1100, 8],
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
