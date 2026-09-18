import type { MotionDefinition } from "../../motion/types.ts";

export default {
  version: 1,
  root: [160, 282],
  groups: {
    eyes: [147, 171],
    shield: [107, 199],
  },
  clips: {
    idle: {
      duration: 2800,
      tracks: {
        "group:shield.angle": [
          [0, 0],
          [1400, 1.5],
          [2800, 0],
        ],
        "group:eyes.sy": [
          [0, 1],
          [2100, 1],
          [2210, 0.08],
          [2360, 1],
          [2800, 1],
        ],
      },
    },
    attack: {
      duration: 800,
      tracks: {
        "root.x": [
          [0, 0],
          [260, 3],
          [420, -8],
          [800, 0],
        ],
        "group:shield.angle": [
          [0, 0],
          [260, 4],
          [420, -6],
          [800, 0],
        ],
      },
    },
    hit: {
      duration: 480,
      tracks: {
        "root.x": [
          [0, 0],
          [100, 3],
          [480, 0],
        ],
        "group:shield.angle": [
          [0, 0],
          [100, -5],
          [480, 0],
        ],
        "group:eyes.sy": [
          [0, 1],
          [100, 0.15],
          [310, 1],
          [480, 1],
        ],
      },
    },
    defeat: {
      duration: 1050,
      tracks: {
        "root.angle": [
          [0, 0],
          [620, 4],
          [1050, 4],
        ],
        "group:shield.angle": [
          [0, 0],
          [620, -5],
          [1050, -5],
        ],
        "root.opacity": [
          [0, 1],
          [500, 1],
          [1050, 0.3],
        ],
        "group:eyes.sy": [
          [0, 1],
          [260, 0.08],
          [1050, 0.08],
        ],
      },
    },
  },
} as const satisfies MotionDefinition;
