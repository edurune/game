import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-shard-burst",
  description: msg`Damages all enemies.`,
  name: msg`Shard burst`,
} as const satisfies ItemMetadata;
