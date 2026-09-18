import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "weapon-rapier",
  name: msg`Rapier`,
  slot: "weapon",
} as const satisfies EquipmentMetadata;
