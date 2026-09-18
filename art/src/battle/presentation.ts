import type { BattlePresentation } from "./types.ts";

const presentation: BattlePresentation = {
  attack: "impact-hit",
  defend: "shield-guard",
  defaults: {
    damage: "impact-hit",
    heal: "healing-mend",
    shield: "shield-guard",
    modify_stat_up: "status-haste",
    modify_stat_down: "status-weakness",
  },
  damageOverrides: {
    "skill-strike": "impact-slash",
    "skill-lunge": "impact-slash",
    "skill-sweep": "impact-slash",
    "skill-rend": "impact-slash",
    "skill-flurry": "impact-slash",
    "skill-power-strike": "impact-critical",
    "skill-frost": "impact-ice",
    "skill-nova": "impact-arcane",
    "skill-ruin": "impact-arcane",
    "skill-spore-cloud": "impact-dust",
    "skill-shock": "impact-lightning",
    "skill-shard-burst": "impact-ice",
    "skill-sand-blast": "impact-dust",
    "skill-frost-breath": "impact-ice",
    "skill-ember-burst": "impact-fire",
    "skill-gust": "impact-wind",
    "skill-thunderclap": "impact-lightning",
  },
} as const satisfies BattlePresentation;
export default presentation;
