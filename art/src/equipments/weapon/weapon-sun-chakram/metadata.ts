import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "weapon-sun-chakram",
  name: msg`Sun chakram`,
  slot: "weapon",
} as const satisfies EquipmentMetadata;
