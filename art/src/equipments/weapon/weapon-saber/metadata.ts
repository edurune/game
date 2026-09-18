import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "weapon-saber",
  name: msg`Saber`,
  slot: "weapon",
} as const satisfies EquipmentMetadata;
