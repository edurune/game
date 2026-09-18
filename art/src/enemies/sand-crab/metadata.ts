import { msg } from "@lingui/core/macro";
import type { EnemyMetadata } from "../../types.ts";

export default {
  id: "sand-crab",
  name: msg`Sand crab`,
  description: msg`Nimble crab burrowing beneath warm sands.`,
  bounds: [46, 149, 271, 282],
} as const satisfies EnemyMetadata;
