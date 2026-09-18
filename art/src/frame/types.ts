import type { BattleFrame, EffectRig, Rect } from "../types.ts";

export interface ArtFrame {
  id: string;
  viewBox: Rect;
  safeBounds: Rect;
  baseline?: number;
  planes: readonly string[];
}

export interface BattleFrameSource extends BattleFrame {
  enemy: ArtFrame & { baseline: number; hoverClearance: number; facing: "left" };
  scene: ArtFrame;
}

export type EffectFrame = ArtFrame &
  Pick<EffectRig, "scaleByKind" | "playerAnchors" | "enemyHeadClearance">;
export interface IconFrame extends ArtFrame {
  strokeWidth: number;
  darkOutline: string;
  reviewSizes: readonly number[];
}
