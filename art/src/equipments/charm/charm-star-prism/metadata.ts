import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "charm-star-prism",
  name: msg`Star prism`,
  slot: "charm",
} as const satisfies EquipmentMetadata;
