import { msg } from "@lingui/core/macro";
import type { EnemyMetadata } from "../../types.ts";

export default {
  id: "dune-scorpion",
  name: msg`Dune scorpion`,
  description: msg`Sand-colored scorpion in a watchful stance.`,
  bounds: [42, 119, 283, 282],
} as const satisfies EnemyMetadata;
