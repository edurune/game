import type { ArtItem, ArtRig, Point } from "../types.ts";
import type { Channel, ClipName, MotionDefinition } from "./types.ts";
import { round4 } from "../internal.ts";
import { assert, keySignature } from "../validation.ts";
type TargetState = {
  pose: Record<Channel, number>;
  pivot: Point;
  transform: string;
  opacity: number;
};
export type MotionState = Record<string, TargetState>;
export const clips = ["idle", "attack", "hit", "defeat"];
const neutral = { x: 0, y: 0, angle: 0, sx: 1, sy: 1, opacity: 1 };
const point = (value: unknown) =>
  Array.isArray(value) &&
  value.length === 2 &&
  value.every((v) => Number.isFinite(v) && v >= 0 && v <= 320);

export function validateMotion(motion: MotionDefinition, item: ArtItem, rig: ArtRig) {
  assert(
    keySignature(motion) === "clips,groups,root,version" &&
      motion.version === 1 &&
      point(motion.root),
    "Invalid motion contract",
  );
  assert(motion.groups && !Array.isArray(motion.groups), "Define motion group pivots");
  for (const [id, pivot] of Object.entries(motion.groups)) {
    assert(/^[a-z][a-z0-9-]*$/.test(id) && point(pivot), "Invalid motion group pivot");
    assert(
      item.parts.some((part) =>
        new RegExp(`<g\\b[^>]*\\bid="${item.id}--${id}"`).test(part.markup),
      ),
      `${item.id}: missing motion group ${id}`,
    );
  }
  assert(
    keySignature(motion.clips) === [...clips].sort().join(),
    "Define idle, attack, hit, and defeat clips",
  );
  for (const [name, clip] of Object.entries(motion.clips)) {
    assert(
      keySignature(clip) === "duration,tracks" &&
        Number.isInteger(clip.duration) &&
        clip.duration >= 100 &&
        clip.duration <= 10000 &&
        keySignature(clip.tracks),
      `Invalid ${name} clip`,
    );
    for (const [track, frames] of Object.entries(clip.tracks)) {
      const [target = "", property = "", extra] = track.split(".");
      const [kind, id = ""] = target.split(":");
      assert(
        !extra &&
          /^(root|(?:anchor|group):[a-z][a-z0-9-]*)$/.test(target) &&
          Object.hasOwn(neutral, property),
        `Invalid motion track ${track}`,
      );
      assert(
        target === "root" ||
          (kind === "group" && Object.hasOwn(motion.groups, id)) ||
          (kind === "anchor" && Object.hasOwn(rig.anchors, id) && property === "angle"),
        `Unknown motion target ${target}`,
      );
      assert(
        Array.isArray(frames) &&
          frames.length >= 2 &&
          frames[0]?.[0] === 0 &&
          frames.at(-1)![0] === clip.duration,
        `Track ${track} must span its clip`,
      );
      for (const [index, frame] of frames.entries()) {
        const [time, value] = frame;
        const range: Point =
          property === "opacity"
            ? [0, 1]
            : ["sx", "sy"].includes(property)
              ? [target === "root" ? 0.75 : 0.08, 1.15]
              : [-32, 32];
        if (item.slot === "base" && target === "root" && ["sx", "sy"].includes(property))
          assert(value === 1, "Do not squash the dressed player");
        assert(
          frame.length === 2 &&
            Number.isFinite(time) &&
            Number.isFinite(value) &&
            time >= 0 &&
            time <= clip.duration &&
            (!index || time > frames[index - 1]![0]) &&
            value >= range[0] &&
            value <= range[1],
          `Invalid keyframe in ${track}`,
        );
      }
      if (name === "idle")
        assert(frames[0]![1] === frames.at(-1)![1], `Idle track ${track} must loop continuously`);
    }
  }
  return motion;
}

export function sampleTrack(frames: readonly (readonly [number, number])[], milliseconds: number) {
  assert(frames.length > 0, "Cannot sample an empty track");
  const time = Math.max(frames[0]![0], Math.min(milliseconds, frames.at(-1)![0]));
  const index = frames.findIndex(([t]) => t >= time);
  const [toTime, to] = frames[index]!;
  const [fromTime, from] = frames[Math.max(0, index - 1)]!;
  const fraction = toTime === fromTime ? 1 : (time - fromTime) / (toTime - fromTime);
  const eased = fraction * fraction * (3 - 2 * fraction);
  return from + (to - from) * eased;
}

export function transformMotionPoint([x, y]: Point, { pose, pivot }: MotionState[string]): Point {
  const radians = (pose.angle * Math.PI) / 180;
  const dx = (x - pivot[0]) * pose.sx;
  const dy = (y - pivot[1]) * pose.sy;
  return [
    pivot[0] + pose.x + dx * Math.cos(radians) - dy * Math.sin(radians),
    pivot[1] + pose.y + dx * Math.sin(radians) + dy * Math.cos(radians),
  ];
}

export function sampleMotion(
  motion: MotionDefinition,
  clipName: ClipName,
  milliseconds: number,
  rig: ArtRig,
): MotionState {
  assert(
    clips.includes(clipName) && Number.isFinite(milliseconds) && milliseconds >= 0,
    "Invalid motion sample",
  );
  const clip = motion.clips[clipName];
  const time =
    clipName === "idle" ? milliseconds % clip.duration : Math.min(milliseconds, clip.duration);
  const targets: Record<string, typeof neutral> = { root: { ...neutral } };
  for (const id of Object.keys(motion.groups)) targets[`group:${id}`] = { ...neutral };
  for (const other of Object.values(motion.clips))
    for (const track of Object.keys(other.tracks)) targets[track.split(".")[0]!] ??= { ...neutral };
  for (const [track, frames] of Object.entries(clip.tracks)) {
    const [target = "", property] = track.split(".");
    if (frames) targets[target]![property as Channel] = sampleTrack(frames, time);
  }
  return Object.fromEntries(
    Object.entries(targets).map(([target, state]) => {
      const [kind, id = ""] = target.split(":");
      const pivot =
        target === "root" ? motion.root : kind === "anchor" ? rig.anchors[id] : motion.groups[id];
      assert(pivot, `Unknown motion pivot: ${target}`);
      const [x, y] = pivot;
      return [
        target,
        {
          pose: state,
          pivot: [x, y],
          transform: `translate(${round4(state.x)} ${round4(state.y)}) translate(${x} ${y}) rotate(${round4(state.angle)}) scale(${round4(state.sx)} ${round4(state.sy)}) translate(${-x} ${-y})`,
          opacity: round4(state.opacity),
        },
      ];
    }),
  );
}

export function motionAttributes(target: string, state: MotionState) {
  const value = state[target];
  return value
    ? `data-motion="${target}" transform="${value.transform}" opacity="${value.opacity}"`
    : "";
}
