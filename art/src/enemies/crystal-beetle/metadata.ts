import { msg } from "@lingui/core/macro";
import type { EnemyMetadata } from "../../types.ts";

export default {
  id: "crystal-beetle",
  name: msg`Crystal beetle`,
  description: msg`Sturdy beetle covered in thick crystal plates.`,
  bounds: [67, 118, 257, 282],
} as const satisfies EnemyMetadata;
