import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "armor-kite-shield",
  name: msg`Kite shield`,
  slot: "armor",
} as const satisfies EquipmentMetadata;
