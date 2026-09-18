import { msg } from "@lingui/core/macro";
import type { EnemyMetadata } from "../../types.ts";

export default {
  id: "storm-bird",
  name: msg`Storm bird`,
  description: msg`Fierce bird carrying storm clouds beneath its wings.`,
  bounds: [68, 85, 254, 282],
} as const satisfies EnemyMetadata;
