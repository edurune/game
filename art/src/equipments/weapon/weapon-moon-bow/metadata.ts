import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "weapon-moon-bow",
  name: msg`Moon bow`,
  slot: "weapon",
} as const satisfies EquipmentMetadata;
