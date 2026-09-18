import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "armor-padded-vest",
  name: msg`Padded vest`,
  slot: "armor",
} as const satisfies EquipmentMetadata;
