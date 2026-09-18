import { msg } from "@lingui/core/macro";
import type { ItemMetadata } from "../../types.ts";

export default {
  id: "dune-basin",
  title: msg`Dunes`,
  description: msg`Open basin surrounded by desert dunes.`,
} as const satisfies ItemMetadata;
