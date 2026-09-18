import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "weapon-sling",
  name: msg`Sling`,
  slot: "weapon",
} as const satisfies EquipmentMetadata;
