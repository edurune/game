import { msg } from "@lingui/core/macro";
import type { EnemyMetadata } from "../../types.ts";

export default {
  id: "frost-wolf",
  name: msg`Frost wolf`,
  description: msg`Pale wolf wrapped in an icy breath.`,
  bounds: [54, 128, 274, 282],
} as const satisfies EnemyMetadata;
