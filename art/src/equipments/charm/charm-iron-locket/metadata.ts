import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "charm-iron-locket",
  name: msg`Iron locket`,
  slot: "charm",
} as const satisfies EquipmentMetadata;
