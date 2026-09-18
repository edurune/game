import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-power-strike",
  description: msg`Damages an enemy.`,
  name: msg`Power strike`,
} as const satisfies ItemMetadata;
