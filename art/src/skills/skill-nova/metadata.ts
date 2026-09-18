import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-nova",
  description: msg`Damages all enemies.`,
  name: msg`Nova`,
} as const satisfies ItemMetadata;
