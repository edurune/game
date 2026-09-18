import type { MotionDefinition } from "../../motion/types.ts";

export default {
  version: 1,
  root: [160, 282],
  groups: {
    eyes: [150, 217],
  },
  clips: {
    idle: {
      duration: 2600,
      tracks: {
        "root.sy": [
          [0, 1],
          [1300, 0.985],
          [2600, 1],
        ],
        "group:eyes.sy": [
          [0, 1],
          [1850, 1],
          [1950, 0.08],
          [2090, 1],
          [2600, 1],
        ],
      },
    },
    attack: {
      duration: 840,
      tracks: {
        "root.sy": [
          [0, 1],
          [260, 0.96],
          [440, 1.025],
          [840, 1],
        ],
        "root.y": [
          [0, 0],
          [260, 0],
          [440, -5],
          [840, 0],
        ],
      },
    },
    hit: {
      duration: 460,
      tracks: {
        "root.x": [
          [0, 0],
          [100, 5],
          [240, 1],
          [460, 0],
        ],
        "root.sy": [
          [0, 1],
          [100, 0.96],
          [460, 1],
        ],
      },
    },
    defeat: {
      duration: 950,
      tracks: {
        "root.sy": [
          [0, 1],
          [520, 0.9],
          [950, 0.9],
        ],
        "root.opacity": [
          [0, 1],
          [500, 1],
          [950, 0.3],
        ],
        "group:eyes.sy": [
          [0, 1],
          [230, 0.08],
          [950, 0.08],
        ],
      },
    },
  },
} as const satisfies MotionDefinition;
