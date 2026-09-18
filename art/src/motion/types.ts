export type ClipName = "idle" | "attack" | "hit" | "defeat";
export type Point = readonly [number, number];
export type Channel = "x" | "y" | "angle" | "sx" | "sy" | "opacity";
export type Track = `root.${Channel}` | `group:${string}.${Channel}` | `anchor:${string}.angle`;
export type Clip = {
  duration: number;
  tracks: Partial<Record<Track, readonly (readonly [number, number])[]>>;
};
export type MotionDefinition = {
  version: 1;
  root: Point;
  groups: Record<string, Point>;
  clips: Record<ClipName, Clip>;
};
export type MotionSnapshot = {
  definition: MotionDefinition;
  owner: string;
  clip: ClipName;
  time: number;
};
