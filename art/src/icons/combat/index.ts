import iconActionAttack from "./action/icon-action-attack/metadata.ts";
import iconActionDefend from "./action/icon-action-defend/metadata.ts";
import iconActionSkill from "./action/icon-action-skill/metadata.ts";
import iconEffectDamage from "./effect/icon-effect-damage/metadata.ts";
import iconEffectDefeat from "./effect/icon-effect-defeat/metadata.ts";
import iconEffectHeal from "./effect/icon-effect-heal/metadata.ts";
import iconEffectModifyStat from "./effect/icon-effect-modify-stat/metadata.ts";
import iconEffectShield from "./effect/icon-effect-shield/metadata.ts";
import iconResourceHealth from "./resource/icon-resource-health/metadata.ts";
import iconResourceMana from "./resource/icon-resource-mana/metadata.ts";
import iconStatAttack from "./stat/icon-stat-attack/metadata.ts";
import iconStatDefense from "./stat/icon-stat-defense/metadata.ts";
import iconStatMaxHealth from "./stat/icon-stat-max-health/metadata.ts";
import iconStatSpeed from "./stat/icon-stat-speed/metadata.ts";
import iconStatusAttackDown from "./status/icon-status-attack-down/metadata.ts";
import iconStatusAttackUp from "./status/icon-status-attack-up/metadata.ts";
import iconStatusDefenseDown from "./status/icon-status-defense-down/metadata.ts";
import iconStatusDefenseUp from "./status/icon-status-defense-up/metadata.ts";
import iconStatusMaxHealthDown from "./status/icon-status-max-health-down/metadata.ts";
import iconStatusMaxHealthUp from "./status/icon-status-max-health-up/metadata.ts";
import iconStatusSpeedDown from "./status/icon-status-speed-down/metadata.ts";
import iconStatusSpeedUp from "./status/icon-status-speed-up/metadata.ts";
import iconTargetAllAllies from "./targeting/icon-target-all-allies/metadata.ts";
import iconTargetAllEnemies from "./targeting/icon-target-all-enemies/metadata.ts";
import iconTargetSelf from "./targeting/icon-target-self/metadata.ts";
import iconTargetSingleEnemy from "./targeting/icon-target-single-enemy/metadata.ts";

export const icons = [
  iconActionAttack,
  iconActionDefend,
  iconActionSkill,
  iconEffectDamage,
  iconEffectDefeat,
  iconEffectHeal,
  iconEffectModifyStat,
  iconEffectShield,
  iconResourceHealth,
  iconResourceMana,
  iconStatAttack,
  iconStatDefense,
  iconStatMaxHealth,
  iconStatSpeed,
  iconStatusAttackDown,
  iconStatusAttackUp,
  iconStatusDefenseDown,
  iconStatusDefenseUp,
  iconStatusMaxHealthDown,
  iconStatusMaxHealthUp,
  iconStatusSpeedDown,
  iconStatusSpeedUp,
  iconTargetAllAllies,
  iconTargetAllEnemies,
  iconTargetSelf,
  iconTargetSingleEnemy,
] as const;

export type CombatIcon = (typeof icons)[number];
export type CombatIconId = CombatIcon["id"];
