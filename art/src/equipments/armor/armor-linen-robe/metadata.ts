import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "armor-linen-robe",
  name: msg`Linen robe`,
  slot: "armor",
} as const satisfies EquipmentMetadata;
