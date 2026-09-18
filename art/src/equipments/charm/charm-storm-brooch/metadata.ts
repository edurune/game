import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "charm-storm-brooch",
  name: msg`Storm brooch`,
  slot: "charm",
} as const satisfies EquipmentMetadata;
