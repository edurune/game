import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "weapon-brass-knuckles",
  name: msg`Brass knuckles`,
  slot: "weapon",
} as const satisfies EquipmentMetadata;
