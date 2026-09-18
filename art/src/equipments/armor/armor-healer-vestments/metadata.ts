import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "armor-healer-vestments",
  name: msg`Healer vestments`,
  slot: "armor",
} as const satisfies EquipmentMetadata;
