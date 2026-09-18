import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "charm-herb-pouch",
  slot: "charm",
  name: msg`Herb pouch`,
  description: msg`Tied cloth pouch filled with herbs.`,
} as const satisfies EquipmentMetadata;
