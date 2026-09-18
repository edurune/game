import { msg } from "@lingui/core/macro";
import type { EnemyMetadata } from "../../types.ts";

export default {
  id: "rockling",
  name: msg`Rockling`,
  description: msg`Lively little boulder with sturdy legs.`,
  bounds: [65, 125, 243, 282],
} as const satisfies EnemyMetadata;
