import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "pottery-apron-set",
  name: msg`Potter’s apron set`,
  slot: "full_body",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
