import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "weapon-oak-staff",
  name: msg`Oak staff`,
  slot: "weapon",
} as const satisfies EquipmentMetadata;
