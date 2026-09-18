import { artwork } from "../artwork.ts";
import type { ClipName } from "../motion/types.ts";

export function animationDuration({
  clip,
  enemyId,
  effectId,
}: {
  clip?: ClipName;
  enemyId?: string;
  effectId?: string;
}) {
  const motion = enemyId ? artwork.enemies[enemyId]?.motion : artwork.playerMotion;
  return Math.max(
    clip ? (motion?.clips[clip].duration ?? 0) : 0,
    effectId ? (artwork.effects[effectId]?.clip.duration ?? 0) : 0,
  );
}
