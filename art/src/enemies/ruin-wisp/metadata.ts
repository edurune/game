import { msg } from "@lingui/core/macro";
import type { EnemyMetadata } from "../../types.ts";

export default {
  id: "ruin-wisp",
  name: msg`Ruin wisp`,
  description: msg`Wandering light drawn to forgotten ruins.`,
  bounds: [72, 107, 242, 271],
} as const satisfies EnemyMetadata;
