import { msg } from "@lingui/core/macro";
import type { EnemyMetadata } from "../../types.ts";

export default {
  id: "acornling",
  bounds: [81, 95, 235, 282],
  name: msg`Acornling`,
  description: msg`Little acorn with a stubborn streak.`,
} as const satisfies EnemyMetadata;
