import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "weapon-void-grimoire",
  name: msg`Void grimoire`,
  slot: "weapon",
} as const satisfies EquipmentMetadata;
