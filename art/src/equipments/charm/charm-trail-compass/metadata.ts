import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "charm-trail-compass",
  name: msg`Trail compass`,
  slot: "charm",
} as const satisfies EquipmentMetadata;
