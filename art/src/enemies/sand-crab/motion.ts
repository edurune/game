import type { MotionDefinition } from "../../motion/types.ts";

export default {
  version: 1,
  root: [160, 282],
  groups: {
    eyes: [133, 162],
    claw: [108, 210],
  },
  clips: {
    idle: {
      duration: 2400,
      tracks: {
        "group:claw.angle": [
          [0, 0],
          [1200, 3],
          [2400, 0],
        ],
        "group:eyes.sy": [
          [0, 1],
          [1820, 1],
          [1920, 0.08],
          [2060, 1],
          [2400, 1],
        ],
      },
    },
    attack: {
      duration: 720,
      tracks: {
        "root.x": [
          [0, 0],
          [220, 2],
          [360, -8],
          [720, 0],
        ],
        "group:claw.angle": [
          [0, 0],
          [220, 8],
          [360, -10],
          [720, 0],
        ],
      },
    },
    hit: {
      duration: 420,
      tracks: {
        "root.x": [
          [0, 0],
          [90, 4],
          [420, 0],
        ],
        "group:claw.angle": [
          [0, 0],
          [90, 6],
          [420, 0],
        ],
      },
    },
    defeat: {
      duration: 900,
      tracks: {
        "group:claw.angle": [
          [0, 0],
          [500, -8],
          [900, -8],
        ],
        "root.opacity": [
          [0, 1],
          [400, 1],
          [900, 0.3],
        ],
        "group:eyes.sy": [
          [0, 1],
          [250, 0.08],
          [900, 0.08],
        ],
      },
    },
  },
} as const satisfies MotionDefinition;
