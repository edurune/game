import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "armor-scale-coat",
  name: msg`Scale coat`,
  slot: "armor",
} as const satisfies EquipmentMetadata;
