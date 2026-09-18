import type { MotionDefinition } from "../../motion/types.ts";

export default {
  version: 1,
  root: [160, 282],
  groups: {
    eyes: [110, 151],
    tail: [185, 243],
  },
  clips: {
    idle: {
      duration: 3000,
      tracks: {
        "group:tail.angle": [
          [0, 0],
          [1500, -2],
          [3000, 0],
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
      duration: 740,
      tracks: {
        "root.x": [
          [0, 0],
          [220, 4],
          [350, -10],
          [740, 0],
        ],
        "root.angle": [
          [0, 0],
          [220, 1.5],
          [350, -2],
          [740, 0],
        ],
        "group:tail.angle": [
          [0, 0],
          [350, 3],
          [740, 0],
        ],
      },
    },
    hit: {
      duration: 460,
      tracks: {
        "root.x": [
          [0, 0],
          [100, 5],
          [460, 0],
        ],
        "group:eyes.sy": [
          [0, 1],
          [100, 0.08],
          [290, 1],
          [460, 1],
        ],
      },
    },
    defeat: {
      duration: 1100,
      tracks: {
        "root.angle": [
          [0, 0],
          [650, 4],
          [1100, 4],
        ],
        "root.opacity": [
          [0, 1],
          [550, 1],
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
