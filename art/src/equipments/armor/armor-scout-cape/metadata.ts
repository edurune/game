import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "armor-scout-cape",
  name: msg`Scout cape`,
  slot: "armor",
} as const satisfies EquipmentMetadata;
