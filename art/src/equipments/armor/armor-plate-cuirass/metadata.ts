import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "armor-plate-cuirass",
  name: msg`Plate cuirass`,
  slot: "armor",
} as const satisfies EquipmentMetadata;
