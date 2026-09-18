import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "weapon-recurve-bow",
  name: msg`Recurve bow`,
  slot: "weapon",
} as const satisfies EquipmentMetadata;
