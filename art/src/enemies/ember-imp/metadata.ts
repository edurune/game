import { msg } from "@lingui/core/macro";
import type { EnemyMetadata } from "../../types.ts";

export default {
  id: "ember-imp",
  name: msg`Ember imp`,
  description: msg`Mischievous spark thriving near open flames.`,
  bounds: [77, 117, 263, 282],
} as const satisfies EnemyMetadata;
