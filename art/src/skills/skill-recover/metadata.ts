import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-recover",
  description: msg`Restores health.`,
  name: msg`Recover`,
} as const satisfies ItemMetadata;
