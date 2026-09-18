import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "weapon-club",
  name: msg`Club`,
  slot: "weapon",
} as const satisfies EquipmentMetadata;
