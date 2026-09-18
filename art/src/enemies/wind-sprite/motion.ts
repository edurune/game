import type { MotionDefinition } from "../../motion/types.ts";

export default {
  version: 1,
  root: [160, 205],
  groups: {
    eyes: [147, 159],
    ribbon: [157, 195],
  },
  clips: {
    idle: {
      duration: 2400,
      tracks: {
        "root.y": [
          [0, 0],
          [1200, -5],
          [2400, 0],
        ],
        "group:ribbon.angle": [
          [0, -2],
          [1200, 2],
          [2400, -2],
        ],
        "group:eyes.sy": [
          [0, 1],
          [1790, 1],
          [1890, 0.08],
          [2030, 1],
          [2400, 1],
        ],
      },
    },
    attack: {
      duration: 650,
      tracks: {
        "root.x": [
          [0, 0],
          [180, 3],
          [340, -10],
          [650, 0],
        ],
        "group:ribbon.angle": [
          [0, 0],
          [180, 5],
          [340, -5],
          [650, 0],
        ],
      },
    },
    hit: {
      duration: 390,
      tracks: {
        "root.x": [
          [0, 0],
          [80, 6],
          [390, 0],
        ],
        "root.angle": [
          [0, 0],
          [80, 3],
          [390, 0],
        ],
      },
    },
    defeat: {
      duration: 1050,
      tracks: {
        "root.y": [
          [0, 0],
          [650, -10],
          [1050, -10],
        ],
        "root.opacity": [
          [0, 1],
          [430, 1],
          [1050, 0.3],
        ],
        "group:eyes.sy": [
          [0, 1],
          [240, 0.08],
          [1050, 0.08],
        ],
      },
    },
  },
} as const satisfies MotionDefinition;
