import { msg } from "@lingui/core/macro";
import type { EnemyMetadata } from "../../types.ts";

export default {
  id: "cave-bat",
  name: msg`Cave bat`,
  description: msg`Sharp-eared bat at home in dark caverns.`,
  bounds: [37, 126, 282, 260],
} as const satisfies EnemyMetadata;
