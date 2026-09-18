import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-quickstep",
  description: msg`Temporarily increases speed.`,
  name: msg`Quickstep`,
} as const satisfies ItemMetadata;
