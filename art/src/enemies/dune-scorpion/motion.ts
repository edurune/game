import type { MotionDefinition } from "../../motion/types.ts";

export default {
  version: 1,
  root: [160, 282],
  groups: {
    eyes: [118, 224],
    tail: [202, 242],
    claw: [116, 232],
  },
  clips: {
    idle: {
      duration: 2700,
      tracks: {
        "group:tail.angle": [
          [0, 0],
          [1350, -2],
          [2700, 0],
        ],
        "group:claw.angle": [
          [0, 0],
          [1350, 2],
          [2700, 0],
        ],
        "group:eyes.sy": [
          [0, 1],
          [2050, 1],
          [2160, 0.08],
          [2300, 1],
          [2700, 1],
        ],
      },
    },
    attack: {
      duration: 700,
      tracks: {
        "root.x": [
          [0, 0],
          [200, 3],
          [340, -8],
          [700, 0],
        ],
        "group:tail.angle": [
          [0, 0],
          [200, 4],
          [340, -12],
          [700, 0],
        ],
        "group:claw.angle": [
          [0, 0],
          [340, -5],
          [700, 0],
        ],
      },
    },
    hit: {
      duration: 430,
      tracks: {
        "root.x": [
          [0, 0],
          [90, 5],
          [430, 0],
        ],
        "group:tail.angle": [
          [0, 0],
          [90, 4],
          [430, 0],
        ],
      },
    },
    defeat: {
      duration: 1000,
      tracks: {
        "group:tail.angle": [
          [0, 0],
          [600, 6],
          [1000, 6],
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
