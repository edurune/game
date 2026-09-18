import frame from "../frame/battle.ts";
import character from "../frame/rig.ts";
import { enemies } from "../enemies/index.ts";
import { actorPlacement } from "./compose.ts";
import type { BattleFrame, Rect } from "../types.ts";

function widenCrop(crop: Rect, bounds: Rect, ratio: number): Rect {
  const width = Math.min(bounds[2], Math.max(1, crop[3] * ratio));
  const centre = crop[0] + crop[2] / 2 - width / 2;
  const x = Math.min(Math.max(centre, bounds[0]), bounds[0] + bounds[2] - width);
  return [x, crop[1], width, crop[3]];
}

export function battleFrameForViewport(
  layout: "wide" | "compact",
  width = 0,
  height = 0,
): BattleFrame {
  if (width <= 0 || height <= 0) return frame;
  const source = frame.layouts[layout];
  const ratio = width / height;
  const world: Rect = [
    0,
    0,
    Math.max(source.world[2], source.world[3] * ratio),
    Math.max(source.world[3], source.world[2] / ratio),
  ];
  return {
    ...frame,
    layouts: {
      ...frame.layouts,
      [layout]: {
        ...source,
        viewBox: [0, 0, width, height],
        world,
        sceneCrop: widenCrop(source.sceneCrop, frame.scene.viewBox, world[2] / world[3]),
      },
    },
  };
}

/** Percent coordinates for controls and feedback sharing the scene camera. */
export function battleLayout(
  frame: BattleFrame,
  layout: "wide" | "compact",
  enemyIds: readonly string[],
) {
  if (!enemyIds.length) return null;
  const placement = actorPlacement(frame, layout, enemyIds.length);
  const [x, y, width, height] = placement.camera;
  const project = (position: { x: number; y: number }, top: number) => ({
    left: ((position.x - 160 - x) / width) * 100,
    top: ((position.y - character.baseline - y) / height) * 100,
    width: (320 / width) * 100,
    height: (320 / height) * 100,
    labelTop: (top / 320) * 100,
    ground: { x: ((position.x - x) / width) * 100, y: ((position.y - y) / height) * 100 },
    head: {
      x: ((position.x - x) / width) * 100,
      y: ((position.y - character.baseline + character.anchors.head[1] - y) / height) * 100,
    },
  });
  return {
    player: project(placement.layout.player, character.anchors.head[1]),
    enemies: enemyIds.map((id, index) =>
      project(
        placement.positions[index]!,
        enemies.find((enemy) => enemy.id === id)?.bounds[1] ?? 0,
      ),
    ),
  };
}
