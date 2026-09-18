import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "rose-ceremony-set",
  name: msg`Rose ceremony set`,
  slot: "full_body",
  rarity: "epic",
} as const satisfies CosmeticMetadata;
