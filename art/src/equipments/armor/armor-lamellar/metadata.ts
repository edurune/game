import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "armor-lamellar",
  name: msg`Lamellar armor`,
  slot: "armor",
} as const satisfies EquipmentMetadata;
