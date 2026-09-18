import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "charm-antidote-vial",
  name: msg`Antidote vial`,
  slot: "charm",
} as const satisfies EquipmentMetadata;
