import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-strike",
  description: msg`Damages an enemy.`,
  name: msg`Strike`,
} as const satisfies ItemMetadata;
