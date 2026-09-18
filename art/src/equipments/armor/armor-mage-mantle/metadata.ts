import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "armor-mage-mantle",
  name: msg`Mage mantle`,
  slot: "armor",
} as const satisfies EquipmentMetadata;
