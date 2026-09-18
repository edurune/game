import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "weapon-battle-axe",
  name: msg`Battle axe`,
  slot: "weapon",
} as const satisfies EquipmentMetadata;
