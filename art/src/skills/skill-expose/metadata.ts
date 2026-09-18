import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-expose",
  description: msg`Temporarily lowers an enemy's defense.`,
  name: msg`Expose`,
} as const satisfies ItemMetadata;
