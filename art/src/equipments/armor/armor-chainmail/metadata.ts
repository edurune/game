import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "armor-chainmail",
  name: msg`Chainmail`,
  slot: "armor",
} as const satisfies EquipmentMetadata;
