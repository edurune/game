import { msg } from "@lingui/core/macro";
import type { EnemyMetadata } from "../../types.ts";

export default {
  id: "tide-titan",
  name: msg`Tide titan`,
  description: msg`Towering sea guardian shaped by waves and coral.`,
  bounds: [37, 46, 284, 282],
} as const satisfies EnemyMetadata;
