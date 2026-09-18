import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "charm-heart-pendant",
  name: msg`Heart pendant`,
  slot: "charm",
} as const satisfies EquipmentMetadata;
