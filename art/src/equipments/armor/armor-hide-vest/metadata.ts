import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "armor-hide-vest",
  name: msg`Hide vest`,
  slot: "armor",
} as const satisfies EquipmentMetadata;
