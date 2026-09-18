import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "armor-leather-jacket",
  name: msg`Leather jacket`,
  slot: "armor",
} as const satisfies EquipmentMetadata;
