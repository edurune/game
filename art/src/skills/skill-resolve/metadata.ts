import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-resolve",
  description: msg`Restores health and temporarily increases defense.`,
  name: msg`Resolve`,
} as const satisfies ItemMetadata;
