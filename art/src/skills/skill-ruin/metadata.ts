import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-ruin",
  description: msg`Damages all enemies and temporarily lowers their defense.`,
  name: msg`Ruin`,
} as const satisfies ItemMetadata;
