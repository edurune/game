import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "weapon-orb-focus",
  name: msg`Arcane orb`,
  slot: "weapon",
} as const satisfies EquipmentMetadata;
