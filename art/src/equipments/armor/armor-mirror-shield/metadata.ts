import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "armor-mirror-shield",
  name: msg`Mirror shield`,
  slot: "armor",
} as const satisfies EquipmentMetadata;
