import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "weapon-crossbow",
  name: msg`Crossbow`,
  slot: "weapon",
} as const satisfies EquipmentMetadata;
