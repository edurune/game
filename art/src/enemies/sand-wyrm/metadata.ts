import { msg } from "@lingui/core/macro";
import type { EnemyMetadata } from "../../types.ts";

export default {
  id: "sand-wyrm",
  name: msg`Sand wyrm`,
  description: msg`Massive desert burrower crowned in sharp spines.`,
  bounds: [37, 68, 298, 282],
} as const satisfies EnemyMetadata;
