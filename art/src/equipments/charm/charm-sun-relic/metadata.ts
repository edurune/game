import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "charm-sun-relic",
  name: msg`Sun relic`,
  slot: "charm",
} as const satisfies EquipmentMetadata;
