import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "weapon-apprentice-wand",
  name: msg`Apprentice wand`,
  slot: "weapon",
} as const satisfies EquipmentMetadata;
