export type EffectKind = "impact" | "healing" | "shield" | "status";
export type EffectAnchor = "body" | "head" | "ground";
export type Keyframes = readonly (readonly [number, number])[];
export type EffectClip = {
  duration: number;
  anchor: EffectAnchor;
  tracks: { opacity: Keyframes; scale: Keyframes; y: Keyframes };
};
export type EffectSelection = {
  id: string;
  target: "player" | `enemy-${number}`;
  time: number;
};
