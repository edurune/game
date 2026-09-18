import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "weapon-hand-axe",
  name: msg`Hand axe`,
  slot: "weapon",
} as const satisfies EquipmentMetadata;
