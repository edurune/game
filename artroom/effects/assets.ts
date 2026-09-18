import type { ArtRig } from "@edurune/art";
import type { EffectFrame } from "@edurune/art/rendering";
import { join } from "node:path";
import { inspectItem, paintedBounds, parseAsset } from "../assets.ts";
import { compose } from "@edurune/art/rendering";
import {
  effectKinds,
  isIdentifier,
  keySignature,
  validateEffectClip,
} from "@edurune/art/rendering";
import { directoryEntries, readMetadata, sourceModule } from "../catalog.ts";
import { nameSignature } from "../internal.ts";

export function validateEffectFrame(frame: EffectFrame, style: ArtRig) {
  if (
    keySignature(frame) !==
      "baseline,enemyHeadClearance,id,planes,playerAnchors,safeBounds,scaleByKind,viewBox" ||
    !isIdentifier(frame.id) ||
    frame.viewBox?.join() !== style.viewBox.join() ||
    frame.safeBounds?.join() !== style.safeBounds.join() ||
    frame.baseline !== 160 ||
    frame.planes?.join() !== "back,front"
  )
    throw new Error("Invalid effect frame");
  if (
    keySignature(frame.scaleByKind) !== [...effectKinds].sort().join() ||
    !Object.values(frame.scaleByKind).every(
      (scale) => Number.isFinite(scale) && scale > 0 && scale <= 1,
    )
  )
    throw new Error("Invalid effect scales");
  const anchors = frame.playerAnchors;
  if (
    keySignature(anchors) !== "body,ground,head" ||
    anchors.body.join() !== style.anchors.torso.join() ||
    anchors.ground.join() !== style.anchors.root.join() ||
    !Object.values(anchors).every(
      (p) =>
        Array.isArray(p) &&
        p.length === 2 &&
        p.every((n) => Number.isFinite(n) && n >= 16 && n <= 304),
    ) ||
    !Number.isFinite(frame.enemyHeadClearance) ||
    frame.enemyHeadClearance < 0 ||
    frame.enemyHeadClearance > 24
  )
    throw new Error("Invalid effect anchors");
  return frame;
}

export async function loadEffects(root: string, rig: ArtRig) {
  const directory = join(root, "effects");
  const entries = (await directoryEntries(directory)).filter((entry) => entry.isDirectory());
  if (
    nameSignature(entries) !== [...effectKinds].sort().join() ||
    !entries.every((e) => e.isDirectory())
  )
    throw new Error("Invalid effect category directories");
  const effects = [];
  const ids = new Set();
  for (const kind of effectKinds) {
    const items = await directoryEntries(join(directory, kind));
    if (!items.length) throw new Error(`Empty effect category: ${kind}`);
    for (const entry of items) {
      if (!entry.isDirectory() || !isIdentifier(entry.name) || ids.has(entry.name))
        throw new Error(`Invalid or duplicate effect ID: ${entry.name}`);
      ids.add(entry.name);
      const path = join(directory, kind, entry.name);
      const files = await directoryEntries(path);
      if (!files.every((e) => e.isFile()) || nameSignature(files) !== "art.svg,clip.ts,metadata.ts")
        throw new Error(`${entry.name}: expected art.svg, clip.ts, metadata.ts`);
      const meta = await readMetadata(path);
      if (!meta || keySignature(meta) !== "id" || meta.id !== entry.name)
        throw new Error(`Invalid effect metadata: ${entry.name}`);
      const clipSource = await sourceModule<Parameters<typeof validateEffectClip>[0]>(
        join(path, "clip.ts"),
      );
      const clip = validateEffectClip(clipSource, kind);
      const item = parseAsset(
        await Bun.file(join(path, "art.svg")).text(),
        { ...meta, label: meta.id, slot: "effect", kind, clip },
        rig,
      );
      if (!item.parts.some((part) => part.plane === "front"))
        throw new Error(`${item.id}: effect needs a front plane`);
      effects.push({
        ...item,
        bounds: paintedBounds(compose(rig, [item], [item.id]), rig),
        partBounds: inspectItem(item, rig),
      });
    }
  }
  return effects;
}
