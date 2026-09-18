import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "charm-hourglass",
  name: msg`Hourglass`,
  slot: "charm",
} as const satisfies EquipmentMetadata;
