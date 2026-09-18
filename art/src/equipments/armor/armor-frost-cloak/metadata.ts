import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "armor-frost-cloak",
  name: msg`Frost cloak`,
  slot: "armor",
} as const satisfies EquipmentMetadata;
