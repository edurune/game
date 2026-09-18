import type { BattleActor, EffectArt, EffectRig, Point } from "../types.ts";
import type { EffectAnchor, EffectClip, EffectSelection } from "./types.ts";
import type { ClipName } from "../motion/types.ts";
import { sampleTrack, sampleMotion, transformMotionPoint } from "../motion/sample.ts";
import { round4 } from "../internal.ts";
import { assert, keySignature } from "../validation.ts";

export const effectKinds = ["impact", "healing", "shield", "status"];

export function validateEffectClip(clip: EffectClip, kind: string) {
  assert(effectKinds.includes(kind), "Unknown effect kind");
  assert(
    keySignature(clip) === "anchor,duration,tracks" &&
      Number.isInteger(clip.duration) &&
      clip.duration >= 300 &&
      clip.duration <= 2400,
    "Invalid effect clip",
  );
  assert(["body", "head", "ground"].includes(clip.anchor), "Invalid effect anchor");
  assert(keySignature(clip.tracks) === "opacity,scale,y", "Invalid effect tracks");
  for (const [channel, frames] of Object.entries(clip.tracks)) {
    assert(
      Array.isArray(frames) &&
        frames.length >= 2 &&
        frames.length <= 12 &&
        frames[0]?.[0] === 0 &&
        frames.at(-1)?.[0] === clip.duration,
      `Effect ${channel} must span its clip`,
    );
    const range: Point = channel === "y" ? [-24, 24] : channel === "scale" ? [0.4, 1.2] : [0, 1];
    frames.forEach((frame, i) => {
      assert(
        Array.isArray(frame) &&
          frame.length === 2 &&
          frame.every(Number.isFinite) &&
          frame[0] >= 0 &&
          frame[0] <= clip.duration &&
          (!i || frame[0] > frames[i - 1]![0]) &&
          frame[1] >= range[0] &&
          frame[1] <= range[1],
        `Invalid effect ${channel} keyframe`,
      );
    });
  }
  const opacity = clip.tracks.opacity;
  assert(
    opacity[0]?.[1] === 0 && opacity.at(-1)?.[1] === 0 && opacity.some((f) => f[1] > 0),
    "Effects must fade in and out",
  );
  return clip;
}

export function sampleEffect(clip: EffectClip, time: number) {
  assert(Number.isFinite(time) && time >= 0, "Invalid effect time");
  return {
    opacity: sampleTrack(clip.tracks.opacity, time),
    scale: sampleTrack(clip.tracks.scale, time),
    y: sampleTrack(clip.tracks.y, time),
  };
}

// Structural anchors, never outfit bounds: a pet or tall hat cannot move the torso.
export function effectAnchor(
  actor: BattleActor,
  anchor: EffectAnchor,
  frame: EffectRig,
  motion?: { clip: ClipName; time: number },
) {
  let point: Point =
    actor.key === "player"
      ? frame.playerAnchors[anchor]!
      : anchor === "ground"
        ? [160, actor.baseline]
        : [
            (actor.bounds[0] + actor.bounds[2]) / 2,
            anchor === "head"
              ? actor.bounds[1] - frame.enemyHeadClearance
              : (actor.bounds[1] + actor.bounds[3]) / 2,
          ];
  if (motion && actor.definition)
    point = transformMotionPoint(
      point,
      sampleMotion(actor.definition, motion.clip, motion.time, actor.rig).root!,
    );
  return [actor.position.x + point[0] - 160, actor.position.y + point[1] - actor.baseline] as const;
}

export function effectState(
  item: EffectArt,
  frame: EffectRig,
  actors: BattleActor[],
  selection: EffectSelection,
  motion?: { clip: ClipName; time: number },
) {
  const target = actors.find((actor) => actor.key === selection.target);
  assert(target, "Unknown effect target");
  const state = sampleEffect(item.clip, selection.time);
  const [x, anchorY] = effectAnchor(target, item.clip.anchor, frame, motion);
  const y = anchorY + state.y;
  const scale = frame.scaleByKind[item.kind]! * state.scale;
  return {
    x,
    y,
    scale,
    opacity: state.opacity,
    transform: `translate(${round4(x)} ${round4(y)}) scale(${round4(scale)}) translate(-160 -160)`,
  };
}

export function bindEffect(
  root: Element,
  item: EffectArt,
  frame: EffectRig,
  actors: BattleActor[],
  selection: EffectSelection,
) {
  const nodes = [...root.querySelectorAll("[data-effect-plane]")];
  return (time: number, motion?: { clip: ClipName; time: number }) => {
    const state = effectState(item, frame, actors, { ...selection, time }, motion);
    for (const node of nodes) {
      node.setAttribute("transform", state.transform);
      node.setAttribute("opacity", String(state.opacity));
    }
  };
}
