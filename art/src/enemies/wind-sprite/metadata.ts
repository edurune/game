import { msg } from "@lingui/core/macro";
import type { EnemyMetadata } from "../../types.ts";

export default {
  id: "wind-sprite",
  name: msg`Wind sprite`,
  description: msg`Playful spirit riding every passing breeze.`,
  bounds: [65, 95, 254, 281],
} as const satisfies EnemyMetadata;
