import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "moon-courier-set",
  name: msg`Moon courier`,
  slot: "full_body",
  rarity: "epic",
} as const satisfies CosmeticMetadata;
