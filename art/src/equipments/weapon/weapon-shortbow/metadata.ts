import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "weapon-shortbow",
  name: msg`Shortbow`,
  slot: "weapon",
} as const satisfies EquipmentMetadata;
