import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "branch-koala",
  name: msg`Branch koala`,
  slot: "pet",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
