import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-bite",
  description: msg`Damages an enemy.`,
  name: msg`Bite`,
} as const satisfies ItemMetadata;
