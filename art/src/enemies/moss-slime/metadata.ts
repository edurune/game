import { msg } from "@lingui/core/macro";
import type { EnemyMetadata } from "../../types.ts";

export default {
  id: "moss-slime",
  name: msg`Moss slime`,
  description: msg`Bouncy blob coated in soft moss.`,
  bounds: [72, 131, 249, 282],
} as const satisfies EnemyMetadata;
