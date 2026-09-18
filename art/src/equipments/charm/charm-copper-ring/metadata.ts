import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "charm-copper-ring",
  name: msg`Copper ring`,
  slot: "charm",
} as const satisfies EquipmentMetadata;
