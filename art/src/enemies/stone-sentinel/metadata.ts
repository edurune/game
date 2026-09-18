import { msg } from "@lingui/core/macro";
import type { EnemyMetadata } from "../../types.ts";

export default {
  id: "stone-sentinel",
  name: msg`Stone sentinel`,
  description: msg`Ancient stone watcher that never leaves its post.`,
  bounds: [42, 55, 276, 282],
} as const satisfies EnemyMetadata;
