import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "skill-revitalize",
  description: msg`Restores health.`,
  name: msg`Revitalize`,
} as const satisfies ItemMetadata;
