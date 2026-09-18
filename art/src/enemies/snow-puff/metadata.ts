import { msg } from "@lingui/core/macro";
import type { EnemyMetadata } from "../../types.ts";

export default {
  id: "snow-puff",
  name: msg`Snow puff`,
  description: msg`Round bundle of snow bursting with energy.`,
  bounds: [79, 132, 236, 282],
} as const satisfies EnemyMetadata;
