import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "armor-duelist-coat",
  name: msg`Duelist coat`,
  slot: "armor",
} as const satisfies EquipmentMetadata;
