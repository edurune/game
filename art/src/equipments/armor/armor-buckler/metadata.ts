import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "armor-buckler",
  slot: "armor",
  name: msg`Buckler`,
  description: msg`Small wooden shield with a metal rim.`,
} as const satisfies EquipmentMetadata;
