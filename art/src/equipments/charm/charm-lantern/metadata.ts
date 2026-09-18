import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "charm-lantern",
  name: msg`Lantern`,
  slot: "charm",
} as const satisfies EquipmentMetadata;
