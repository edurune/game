import { msg } from "@lingui/core/macro";
import type { EquipmentMetadata } from "../../../types.ts";

export default {
  id: "weapon-ember-blade",
  name: msg`Ember blade`,
  slot: "weapon",
} as const satisfies EquipmentMetadata;
