import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "charm-thorn-amulet",
  name: msg`Thorn amulet`,
  slot: "charm",
} as const satisfies EquipmentMetadata;
