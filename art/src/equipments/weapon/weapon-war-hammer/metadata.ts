import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "weapon-war-hammer",
  name: msg`War hammer`,
  slot: "weapon",
} as const satisfies EquipmentMetadata;
