import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-crush",
  description: msg`Damages an enemy.`,
  name: msg`Crush`,
} as const satisfies ItemMetadata;
