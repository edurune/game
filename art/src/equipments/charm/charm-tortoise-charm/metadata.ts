import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "charm-tortoise-charm",
  name: msg`Tortoise charm`,
  slot: "charm",
} as const satisfies EquipmentMetadata;
