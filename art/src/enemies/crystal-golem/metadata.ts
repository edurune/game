import { msg } from "@lingui/core/macro";
import type { EnemyMetadata } from "../../types.ts";

export default {
  id: "crystal-golem",
  name: msg`Crystal golem`,
  description: msg`Towering guardian carved from living crystal.`,
  bounds: [36, 46, 281, 282],
} as const satisfies EnemyMetadata;
