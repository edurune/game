import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "cloud-court",
  title: msg`Cloud court`,
  description: msg`Stone court high among the clouds.`,
} as const satisfies ItemMetadata;
