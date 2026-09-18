import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "weapon-dagger",
  name: msg`Dagger`,
  slot: "weapon",
} as const satisfies EquipmentMetadata;
