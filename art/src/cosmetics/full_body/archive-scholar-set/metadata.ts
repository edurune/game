import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "archive-scholar-set",
  name: msg`Archive scholar`,
  slot: "full_body",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
