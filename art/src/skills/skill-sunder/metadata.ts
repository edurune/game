import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-sunder",
  description: msg`Damages an enemy and temporarily lowers their defense.`,
  name: msg`Sunder`,
} as const satisfies ItemMetadata;
