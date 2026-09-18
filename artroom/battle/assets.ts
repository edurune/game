import type { ArtItem, ArtRig } from "@edurune/art";
import type { BattleFrameSource } from "@edurune/art/rendering";
import type { ReviewSet } from "./types.ts";
import { join } from "node:path";
import { artRig, inspectItem, loadFrame, paintedBounds, parseAsset } from "../assets.ts";
import { playerMotion as playerMotionSource } from "@edurune/art/rendering";
import { battleFrame as battleSource } from "@edurune/art/rendering";
import { mapFrame } from "@edurune/art/rendering";
import { Resvg } from "@resvg/resvg-js";
import { effectFrame as effectSource } from "@edurune/art/rendering";
import sets from "./sets.ts";
import { catalogRoot, directoryEntries, readMetadata } from "../catalog.ts";
import { compose } from "@edurune/art/rendering";
import { loadEnemies } from "../enemies/assets.ts";
import { validateMotion } from "@edurune/art/rendering";
import { loadEffects, validateEffectFrame } from "../effects/assets.ts";
import { actorPlacement, assert, isIdentifier, keySignature } from "@edurune/art/rendering";
import { nameSignature } from "../internal.ts";

export function validateBattleFrame(frame: BattleFrameSource, style: ArtRig) {
  const { enemy, scene, layouts } = frame;
  assert(
    enemy && scene && isIdentifier(enemy.id) && isIdentifier(scene.id) && enemy.id !== scene.id,
    "Invalid battle frame IDs",
  );
  assert(
    enemy.viewBox?.join() === style.viewBox.join() &&
      enemy.safeBounds?.join() === style.safeBounds.join() &&
      enemy.baseline === style.baseline,
    "Enemy frame must share the character canvas and ground line",
  );
  assert(enemy.facing === "left", "Enemy frame must face left");
  assert(
    Number.isFinite(enemy.hoverClearance) &&
      enemy.hoverClearance >= 0 &&
      enemy.hoverClearance <= enemy.baseline - enemy.safeBounds[1],
    "Enemy hover clearance must fit between the safe bounds and ground line",
  );
  assert(
    scene.viewBox?.length === 4 &&
      scene.viewBox[0] === 0 &&
      scene.viewBox[1] === 0 &&
      scene.viewBox.slice(2).every((v) => Number.isInteger(v) && v >= 320 && v <= 1920) &&
      scene.safeBounds?.join() === scene.viewBox.join(),
    "Scene frame must use its full rectangular canvas",
  );
  assert(
    enemy.planes?.join() === "rear,body,front" &&
      scene.planes?.join() === "backdrop,terrain,foreground",
    "Invalid battle drawing order",
  );
  assert(layouts && keySignature(layouts) === "compact,wide", "Define wide and compact layouts");
  assert(
    Number.isFinite(frame.cameraPadding) && frame.cameraPadding >= 32 && frame.cameraPadding <= 96,
    "Invalid camera padding",
  );
  for (const [name, layout] of Object.entries(layouts)) {
    assert(
      layout.viewBox?.length === 4 &&
        layout.viewBox.slice(0, 2).every((v) => v === 0) &&
        layout.viewBox.slice(2).every((v) => Number.isInteger(v) && v >= 320 && v <= 1920),
      "Invalid battle viewport",
    );
    assert(
      keySignature(layout) === "enemies,player,sceneCrop,viewBox,world" &&
        layout.world?.length === 4 &&
        layout.world.slice(0, 2).every((v) => v === 0) &&
        layout.world.slice(2).every((v) => Number.isInteger(v) && v >= 320 && v <= 1920),
      "Define a fixed battle world and positions, without per-actor scales",
    );
    const crop = layout.sceneCrop;
    assert(
      crop?.length === 4 &&
        crop.every(Number.isFinite) &&
        crop[0] >= 0 &&
        crop[1] >= 0 &&
        crop[2] > 0 &&
        crop[3] > 0 &&
        crop[0] + crop[2] <= scene.viewBox[2] &&
        crop[1] + crop[3] <= scene.viewBox[3],
      "Scene crop exceeds its canvas",
    );
    assert(
      Math.abs(crop[2] / crop[3] - layout.world[2] / layout.world[3]) < 0.001,
      "Scene crop must match the world aspect ratio",
    );
    assert(layout.enemies?.length === 4, "Define four fixed enemy positions");
    for (const p of [layout.player, ...layout.enemies]) {
      assert(
        p && keySignature(p) === "x,y" && [p.x, p.y].every(Number.isFinite),
        "Actor placements contain only x and y, never scale",
      );
      assert(
        p.x - 160 >= 0 &&
          p.x + 160 <= layout.world[2] &&
          p.y - enemy.baseline >= 0 &&
          p.y + 320 - enemy.baseline <= layout.world[3],
        "Actor frame extends outside battle world",
      );
    }
    for (const count of [1, 2, 3, 4]) actorPlacement(frame, name as "wide" | "compact", count);
  }
  return frame;
}

export function validateArtMetadata(metadata: { id: string }, directory: string) {
  assert(metadata && keySignature(metadata) === "id", "Art metadata must contain only id");
  assert(isIdentifier(metadata.id) && metadata.id === directory, "Art ID must match its directory");
  return metadata;
}

function inspectTerrain(item: ArtItem, rig: ArtRig) {
  const svg = compose(rig, [item], [item.id]);
  const bounds = paintedBounds(svg, rig);
  assert(bounds.join() === rig.safeBounds.join(), `${item.id}: terrain must fill its canvas`);
  const rendered = new Resvg(svg, { font: { loadSystemFonts: false } }).render();
  const stride = rendered.width * 4;
  const end = (rendered.height - 1) * stride;
  const pixels = rendered.pixels;
  for (let offset = 0; offset < stride; offset++)
    assert(
      Math.abs(pixels[offset] - pixels[end + offset]) <= 2,
      `${item.id}: terrain top and bottom do not meet at x=${Math.floor(offset / 4)}`,
    );
  return bounds;
}

async function readRegions(root: string, rig: ArtRig, terrainRig: ArtRig) {
  const entries = (await directoryEntries(join(root, "regions"))).filter(
    (entry) => entry.name !== "index.ts",
  );
  const items = [];
  for (const entry of entries) {
    assert(
      entry.isDirectory() && isIdentifier(entry.name),
      `Expected an art directory: ${entry.name}`,
    );
    const path = join(root, "regions", entry.name);
    const files = await directoryEntries(path);
    const filenames = nameSignature(files);
    assert(
      files.every((e) => e.isFile()) &&
        filenames === "art.svg,metadata.ts,music-boss.mp3,music-normal.mp3,terrain.svg",
      `${entry.name}: expected art.svg, metadata.ts, terrain.svg, and normal/boss music`,
    );
    const metadata = validateArtMetadata(await readMetadata(path), entry.name);
    const item = parseAsset(
      await Bun.file(join(path, "art.svg")).text(),
      { ...metadata, label: metadata.id, slot: "scene" },
      rig,
    );
    const planes = item.parts.map((p) => p.plane);
    assert(
      rig.planes.every((p) => planes.includes(p.id)),
      `${item.id}: missing drawing planes`,
    );
    const bounds = paintedBounds(compose(rig, [item], [item.id]), rig);
    assert(
      bounds.join() === rig.safeBounds.join(),
      `${item.id}: scene must fill the canvas without a border`,
    );
    const terrain = parseAsset(
      await Bun.file(join(path, "terrain.svg")).text(),
      { ...metadata, label: metadata.id, slot: "terrain" },
      terrainRig,
    );
    items.push({
      ...item,
      bounds,
      partBounds: inspectItem(item, rig),
      terrain: { ...terrain, bounds: inspectTerrain(terrain, terrainRig) },
      music: {
        normal: `/music/encounter/${item.id}-normal.mp3`,
        boss: `/music/encounter/${item.id}-boss.mp3`,
      },
    });
  }
  return items;
}

export function validateReviewSets(
  sets: readonly ReviewSet[],
  enemies: ArtItem[],
  regions: ArtItem[],
) {
  const enemyIds = new Set(enemies.map((i) => i.id));
  const regionIds = new Set(regions.map((i) => i.id));
  assert(new Set(sets.map((s) => s.region)).size === sets.length, "Duplicate region review set");
  for (const set of sets) {
    assert(
      keySignature(set) === "boss,enemies,region" && regionIds.has(set.region),
      "Unknown region in review set",
    );
    assert(
      set.enemies.length === 3 &&
        new Set([...set.enemies, set.boss]).size === 4 &&
        [...set.enemies, set.boss].every((id) => enemyIds.has(id)),
      `${set.region}: review set needs three enemies and a distinct boss design`,
    );
  }
  assert(sets.length === regions.length, "Every region needs a review set");
  assert(
    new Set(sets.flatMap((s) => [...s.enemies, s.boss])).size === enemies.length,
    "Every enemy needs a review set",
  );
}

export async function loadBattleArt(root = catalogRoot) {
  const { rig: style, body } = await loadFrame();
  const playerMotion = validateMotion(playerMotionSource, body, style);
  const frame = validateBattleFrame(battleSource, style);
  const enemyRig = artRig(frame.enemy, style, "enemy");
  const sceneRig = artRig(frame.scene, style, "scene");
  const terrainRig = artRig(mapFrame, style, "terrain");
  const effectFrame = validateEffectFrame(effectSource, style);
  const effectRig = artRig(effectFrame, style, "effect");
  const [enemySource, regions] = await Promise.all([
    loadEnemies(root, enemyRig),
    readRegions(root, sceneRig, terrainRig),
  ]);
  const enemies = enemySource.items;
  validateReviewSets(sets, enemies, regions);
  const effects = await loadEffects(root, effectRig);
  return {
    frame,
    enemyRig,
    sceneRig,
    terrainRig,
    enemies,
    regions,
    sets,
    playerMotion,
    effectRig,
    effects,
  };
}
