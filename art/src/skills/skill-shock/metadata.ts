import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-shock",
  description: msg`Damages an enemy.`,
  name: msg`Shock`,
} as const satisfies ItemMetadata;
