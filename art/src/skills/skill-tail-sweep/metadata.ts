import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-tail-sweep",
  description: msg`Damages all enemies.`,
  name: msg`Tail sweep`,
} as const satisfies ItemMetadata;
