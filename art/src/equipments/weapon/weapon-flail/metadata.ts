import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "weapon-flail",
  name: msg`Flail`,
  slot: "weapon",
} as const satisfies EquipmentMetadata;
