import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "weapon-dawn-sword",
  name: msg`Dawn sword`,
  slot: "weapon",
} as const satisfies EquipmentMetadata;
