import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "ember-caldera",
  title: msg`Caldera`,
  description: msg`Dark volcanic rock surrounds glowing lava.`,
} as const satisfies ItemMetadata;
