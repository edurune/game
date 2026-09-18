import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "weapon-scythe",
  name: msg`Scythe`,
  slot: "weapon",
} as const satisfies EquipmentMetadata;
