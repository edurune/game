import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "charm-feather-token",
  name: msg`Feather token`,
  slot: "charm",
} as const satisfies EquipmentMetadata;
