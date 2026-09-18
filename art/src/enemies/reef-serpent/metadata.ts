import { msg } from "@lingui/core/macro";
import type { EnemyMetadata } from "../../types.ts";

export default {
  id: "reef-serpent",
  name: msg`Reef serpent`,
  description: msg`Bright sea serpent weaving through coral reefs.`,
  bounds: [64, 108, 284, 282],
} as const satisfies EnemyMetadata;
