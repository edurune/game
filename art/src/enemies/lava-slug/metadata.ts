import { msg } from "@lingui/core/macro";
import type { EnemyMetadata } from "../../types.ts";

export default {
  id: "lava-slug",
  name: msg`Lava slug`,
  description: msg`Slow-moving slug leaving a glowing trail.`,
  bounds: [61, 161, 282, 282],
} as const satisfies EnemyMetadata;
