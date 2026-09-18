import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "weapon-halberd",
  name: msg`Halberd`,
  slot: "weapon",
} as const satisfies EquipmentMetadata;
