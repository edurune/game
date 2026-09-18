import { msg } from "@lingui/core/macro";
import type { EnemyMetadata } from "../../types.ts";

export default {
  id: "capling",
  name: msg`Capling`,
  description: msg`Tiny mushroom hopping through the undergrowth.`,
  bounds: [69, 107, 246, 282],
} as const satisfies EnemyMetadata;
