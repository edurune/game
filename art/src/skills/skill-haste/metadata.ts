import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-haste",
  description: msg`Temporarily increases speed.`,
  name: msg`Haste`,
} as const satisfies ItemMetadata;
