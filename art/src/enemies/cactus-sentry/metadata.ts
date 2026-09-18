import { msg } from "@lingui/core/macro";
import type { EnemyMetadata } from "../../types.ts";

export default {
  id: "cactus-sentry",
  name: msg`Cactus sentry`,
  description: msg`Watchful cactus with a prickly temper.`,
  bounds: [61, 90, 239, 282],
} as const satisfies EnemyMetadata;
