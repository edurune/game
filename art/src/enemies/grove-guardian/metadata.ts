import { msg } from "@lingui/core/macro";
import type { EnemyMetadata } from "../../types.ts";

export default {
  id: "grove-guardian",
  bounds: [38, 43, 284, 282],
  name: msg`Grove guardian`,
  description: msg`Walking ancient tree crowned in leaves.`,
} as const satisfies EnemyMetadata;
