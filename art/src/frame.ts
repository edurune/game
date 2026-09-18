import character from "./frame/rig.ts";
import battleFrame from "./frame/battle.ts";
import type { EffectRig } from "./types.ts";
import effects from "./frame/effects.ts";
import equipment from "./frame/equipments.ts";
import icon from "./frame/ui-icons.ts";
import { artRig } from "./rig.ts";

export const rigs = {
  character,
  enemy: artRig(battleFrame.enemy, character, "enemy"),
  scene: artRig(battleFrame.scene, character, "scene"),
  effect: artRig(effects, character, "effect") as EffectRig,
  equipment: artRig(equipment, character, ["weapon", "armor", "charm"]),
  icon: artRig(icon, { ...character, strokeWidth: icon.strokeWidth }, "combat-icon"),
};
