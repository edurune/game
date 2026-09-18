import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "charm-phoenix-feather",
  name: msg`Phoenix feather`,
  slot: "charm",
} as const satisfies EquipmentMetadata;
