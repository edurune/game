import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "charm-shell-pendant",
  name: msg`Shell pendant`,
  slot: "charm",
} as const satisfies EquipmentMetadata;
