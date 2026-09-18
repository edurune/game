import { msg } from "@lingui/core/macro";
import type { EnemyMetadata } from "../../types.ts";

export default {
  id: "ash-hound",
  name: msg`Ash hound`,
  description: msg`Coal-dark hound trailing warm ash.`,
  bounds: [46, 135, 271, 282],
} as const satisfies EnemyMetadata;
