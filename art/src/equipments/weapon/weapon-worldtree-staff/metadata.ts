import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "weapon-worldtree-staff",
  name: msg`Worldtree staff`,
  slot: "weapon",
} as const satisfies EquipmentMetadata;
