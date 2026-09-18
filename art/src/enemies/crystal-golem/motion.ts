import type { MotionDefinition } from "../../motion/types.ts";

export default {
  version: 1,
  root: [160, 280],
  groups: {
    eyes: [144, 153],
    "arm-near": [100, 172],
    "arm-far": [214, 167],
  },
  clips: {
    idle: {
      duration: 3200,
      tracks: {
        "group:arm-near.angle": [
          [0, 0],
          [1600, -2],
          [3200, 0],
        ],
        "group:arm-far.angle": [
          [0, 0],
          [1600, 2],
          [3200, 0],
        ],
        "group:eyes.sy": [
          [0, 1],
          [2700, 1],
          [2810, 0.08],
          [2950, 1],
          [3200, 1],
        ],
      },
    },
    attack: {
      duration: 1000,
      tracks: {
        "root.x": [
          [0, 0],
          [350, 4],
          [530, -10],
          [720, -10],
          [1000, 0],
        ],
        "group:arm-near.angle": [
          [0, 0],
          [350, -16],
          [530, 24],
          [720, 18],
          [1000, 0],
        ],
        "group:arm-far.angle": [
          [0, 0],
          [350, 6],
          [530, -8],
          [1000, 0],
        ],
      },
    },
    hit: {
      duration: 600,
      tracks: {
        "root.x": [
          [0, 0],
          [120, 5],
          [300, 2],
          [600, 0],
        ],
        "group:arm-near.angle": [
          [0, 0],
          [120, -6],
          [300, 2],
          [600, 0],
        ],
        "group:eyes.sy": [
          [0, 1],
          [120, 0.08],
          [320, 1],
          [600, 1],
        ],
      },
    },
    defeat: {
      duration: 1100,
      tracks: {
        "root.angle": [
          [0, 0],
          [500, 3],
          [900, 9],
          [1100, 9],
        ],
        "root.opacity": [
          [0, 1],
          [650, 1],
          [1100, 0.3],
        ],
        "group:arm-near.angle": [
          [0, 0],
          [700, -8],
          [1100, -8],
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
