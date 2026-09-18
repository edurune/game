import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "weapon-twin-daggers",
  name: msg`Twin daggers`,
  slot: "weapon",
} as const satisfies EquipmentMetadata;
