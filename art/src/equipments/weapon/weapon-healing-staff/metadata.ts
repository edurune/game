import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "weapon-healing-staff",
  name: msg`Healing staff`,
  slot: "weapon",
} as const satisfies EquipmentMetadata;
