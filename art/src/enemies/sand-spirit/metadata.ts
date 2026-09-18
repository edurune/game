import { msg } from "@lingui/core/macro";
import type { EnemyMetadata } from "../../types.ts";

export default {
  id: "sand-spirit",
  name: msg`Sand spirit`,
  description: msg`Restless desert sands given shape.`,
  bounds: [70, 113, 243, 281],
} as const satisfies EnemyMetadata;
