import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "charm-sapphire-ring",
  name: msg`Sapphire ring`,
  slot: "charm",
} as const satisfies EquipmentMetadata;
