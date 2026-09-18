import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-thunderclap",
  description: msg`Damages all enemies.`,
  name: msg`Thunderclap`,
} as const satisfies ItemMetadata;
