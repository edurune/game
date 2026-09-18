import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "weapon-storm-spear",
  name: msg`Storm spear`,
  slot: "weapon",
} as const satisfies EquipmentMetadata;
