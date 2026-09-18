import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "weapon-spellbook",
  name: msg`Spellbook`,
  slot: "weapon",
} as const satisfies EquipmentMetadata;
