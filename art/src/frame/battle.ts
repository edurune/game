import type { BattleFrameSource } from "./types.ts";

export default {
  enemy: {
    id: "battle-enemy-v1",
    viewBox: [0, 0, 320, 320],
    safeBounds: [16, 16, 304, 304],
    baseline: 282,
    hoverClearance: 180,
    facing: "left",
    planes: ["rear", "body", "front"],
  },
  scene: {
    id: "battle-scene-v1",
    viewBox: [0, 0, 960, 540],
    safeBounds: [0, 0, 960, 540],
    planes: ["backdrop", "terrain", "foreground"],
  },
  cameraPadding: 60,
  layouts: {
    wide: {
      viewBox: [0, 0, 960, 540],
      world: [0, 0, 1920, 1080],
      sceneCrop: [0, 0, 960, 540],
      player: {
        x: 360,
        y: 900,
      },
      enemies: [
        {
          x: 970,
          y: 720,
        },
        {
          x: 1450,
          y: 720,
        },
        {
          x: 970,
          y: 1000,
        },
        {
          x: 1450,
          y: 1000,
        },
      ],
    },
    compact: {
      viewBox: [0, 0, 600, 600],
      world: [0, 0, 1440, 1440],
      sceneCrop: [210, 0, 540, 540],
      player: {
        x: 350,
        y: 1160,
      },
      enemies: [
        {
          x: 820,
          y: 995,
        },
        {
          x: 1180,
          y: 995,
        },
        {
          x: 820,
          y: 1300,
        },
        {
          x: 1180,
          y: 1300,
        },
      ],
    },
  },
} as const satisfies BattleFrameSource;
