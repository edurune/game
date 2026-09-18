import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "weapon-spirit-bell",
  name: msg`Spirit bell`,
  slot: "weapon",
} as const satisfies EquipmentMetadata;
