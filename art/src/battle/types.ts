import type { EffectId } from "../effects/index.ts";

export interface BattlePresentation {
  attack: EffectId;
  defend: EffectId;
  defaults: Record<"damage" | "heal" | "shield" | "modify_stat_up" | "modify_stat_down", EffectId>;
  damageOverrides: Readonly<Record<string, EffectId>>;
}
