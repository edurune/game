import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "trail-scout-set",
  name: msg`Trail scout`,
  slot: "full_body",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
