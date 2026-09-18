import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-pounce",
  description: msg`Damages an enemy.`,
  name: msg`Pounce`,
} as const satisfies ItemMetadata;
