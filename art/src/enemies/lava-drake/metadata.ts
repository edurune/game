import { msg } from "@lingui/core/macro";
import type { EnemyMetadata } from "../../types.ts";

export default {
  id: "lava-drake",
  name: msg`Lava drake`,
  description: msg`Young volcanic dragon coated in molten scales.`,
  bounds: [37, 53, 296, 282],
} as const satisfies EnemyMetadata;
