import { msg } from "@lingui/core/macro";
import type { EnemyMetadata } from "../../types.ts";

export default {
  id: "cloudling",
  name: msg`Cloudling`,
  description: msg`Small cloud with a lively silver lining.`,
  bounds: [76, 126, 244, 282],
} as const satisfies EnemyMetadata;
