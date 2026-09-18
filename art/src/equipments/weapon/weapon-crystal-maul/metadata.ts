import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "weapon-crystal-maul",
  name: msg`Crystal maul`,
  slot: "weapon",
} as const satisfies EquipmentMetadata;
