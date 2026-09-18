import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "weapon-practice-sword",
  slot: "weapon",
  name: msg`Practice sword`,
  description: msg`Wooden sword for practicing the basics.`,
} as const satisfies EquipmentMetadata;
