import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "weapon-boomerang",
  name: msg`Boomerang`,
  slot: "weapon",
} as const satisfies EquipmentMetadata;
