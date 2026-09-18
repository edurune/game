import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "weapon-spear",
  name: msg`Spear`,
  slot: "weapon",
} as const satisfies EquipmentMetadata;
