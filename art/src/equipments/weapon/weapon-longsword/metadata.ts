import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "weapon-longsword",
  name: msg`Longsword`,
  slot: "weapon",
} as const satisfies EquipmentMetadata;
