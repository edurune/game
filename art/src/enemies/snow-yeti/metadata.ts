import { msg } from "@lingui/core/macro";
import type { EnemyMetadata } from "../../types.ts";

export default {
  id: "snow-yeti",
  name: msg`Snow yeti`,
  description: msg`Shaggy giant adapted to the coldest peaks.`,
  bounds: [37, 44, 281, 282],
} as const satisfies EnemyMetadata;
