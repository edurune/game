import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "charm-ward-stone",
  name: msg`Ward stone`,
  slot: "charm",
} as const satisfies EquipmentMetadata;
