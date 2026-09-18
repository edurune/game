import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "charm-silver-bell",
  name: msg`Silver bell`,
  slot: "charm",
} as const satisfies EquipmentMetadata;
