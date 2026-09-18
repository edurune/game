import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "armor-dragon-scale",
  name: msg`Dragon scale armor`,
  slot: "armor",
} as const satisfies EquipmentMetadata;
