import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-ember-burst",
  description: msg`Damages all enemies.`,
  name: msg`Ember burst`,
} as const satisfies ItemMetadata;
