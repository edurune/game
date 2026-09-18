import { msg } from "@lingui/core/macro";
import type { EnemyMetadata } from "../../types.ts";

export default {
  id: "ruin-mimic",
  name: msg`Ruin mimic`,
  description: msg`Deceptive treasure chest hungry for adventurers.`,
  bounds: [60, 101, 244, 282],
} as const satisfies EnemyMetadata;
