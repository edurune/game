import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "weapon-frost-scepter",
  name: msg`Frost scepter`,
  slot: "weapon",
} as const satisfies EquipmentMetadata;
