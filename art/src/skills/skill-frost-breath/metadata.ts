import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-frost-breath",
  description: msg`Damages all enemies and temporarily slows them down.`,
  name: msg`Frost breath`,
} as const satisfies ItemMetadata;
