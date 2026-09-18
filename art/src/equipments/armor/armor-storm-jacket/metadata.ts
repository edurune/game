import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "armor-storm-jacket",
  name: msg`Storm jacket`,
  slot: "armor",
} as const satisfies EquipmentMetadata;
