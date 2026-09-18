import { msg } from "@lingui/core/macro";
import type { EnemyMetadata } from "../../types.ts";

export default {
  id: "penguin-guard",
  name: msg`Penguin guard`,
  description: msg`Disciplined penguin standing watch in the snow.`,
  bounds: [65, 106, 231, 282],
} as const satisfies EnemyMetadata;
