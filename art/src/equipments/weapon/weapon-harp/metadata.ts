import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "weapon-harp",
  name: msg`Harp`,
  slot: "weapon",
} as const satisfies EquipmentMetadata;
