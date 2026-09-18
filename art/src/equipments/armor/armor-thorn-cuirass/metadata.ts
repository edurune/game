import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "armor-thorn-cuirass",
  name: msg`Thorn cuirass`,
  slot: "armor",
} as const satisfies EquipmentMetadata;
