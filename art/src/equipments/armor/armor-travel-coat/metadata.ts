import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "armor-travel-coat",
  name: msg`Travel coat`,
  slot: "armor",
} as const satisfies EquipmentMetadata;
