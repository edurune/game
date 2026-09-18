import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "weapon-trident",
  name: msg`Trident`,
  slot: "weapon",
} as const satisfies EquipmentMetadata;
