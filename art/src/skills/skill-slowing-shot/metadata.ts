import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-slowing-shot",
  description: msg`Damages an enemy and temporarily slows them down.`,
  name: msg`Slowing shot`,
} as const satisfies ItemMetadata;
