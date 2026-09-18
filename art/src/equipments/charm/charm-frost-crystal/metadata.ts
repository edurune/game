import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "charm-frost-crystal",
  name: msg`Frost crystal`,
  slot: "charm",
} as const satisfies EquipmentMetadata;
