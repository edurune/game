import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-slam",
  description: msg`Damages an enemy.`,
  name: msg`Slam`,
} as const satisfies ItemMetadata;
