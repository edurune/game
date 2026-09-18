import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "weapon-mace",
  name: msg`Mace`,
  slot: "weapon",
} as const satisfies EquipmentMetadata;
