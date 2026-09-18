import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "charm-amber-bead",
  name: msg`Amber bead`,
  slot: "charm",
} as const satisfies EquipmentMetadata;
