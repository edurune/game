import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "weapon-greatsword",
  name: msg`Greatsword`,
  slot: "weapon",
} as const satisfies EquipmentMetadata;
