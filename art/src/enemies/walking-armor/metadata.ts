import { msg } from "@lingui/core/macro";
import type { EnemyMetadata } from "../../types.ts";

export default {
  id: "walking-armor",
  name: msg`Walking armor`,
  description: msg`Empty suit of armor animated by old magic.`,
  bounds: [64, 67, 233, 282],
} as const satisfies EnemyMetadata;
