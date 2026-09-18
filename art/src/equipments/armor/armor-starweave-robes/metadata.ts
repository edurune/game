import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "armor-starweave-robes",
  name: msg`Starweave robes`,
  slot: "armor",
} as const satisfies EquipmentMetadata;
