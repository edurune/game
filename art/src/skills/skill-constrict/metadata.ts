import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-constrict",
  description: msg`Damages an enemy and temporarily slows them down.`,
  name: msg`Constrict`,
} as const satisfies ItemMetadata;
