import { msg } from "@lingui/core/macro";
import type { EnemyMetadata } from "../../types.ts";

export default {
  id: "lantern-jellyfish",
  name: msg`Lantern jellyfish`,
  description: msg`Drifting jellyfish glowing like a lantern.`,
  bounds: [81, 118, 233, 279],
} as const satisfies EnemyMetadata;
