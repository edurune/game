import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "charm-renewal-seed",
  name: msg`Renewal seed`,
  slot: "charm",
} as const satisfies EquipmentMetadata;
