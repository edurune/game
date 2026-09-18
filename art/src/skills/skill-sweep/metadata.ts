import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-sweep",
  description: msg`Damages all enemies.`,
  name: msg`Sweep`,
} as const satisfies ItemMetadata;
