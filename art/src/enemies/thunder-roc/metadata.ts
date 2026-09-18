import { msg } from "@lingui/core/macro";
import type { EnemyMetadata } from "../../types.ts";

export default {
  id: "thunder-roc",
  name: msg`Thunder roc`,
  description: msg`Colossal sky hunter crackling with lightning.`,
  bounds: [38, 49, 285, 282],
} as const satisfies EnemyMetadata;
