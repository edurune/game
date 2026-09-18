import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "star-backed-cape",
  name: msg`Star cape`,
  slot: "accessory",
  rarity: "epic",
} as const satisfies CosmeticMetadata;
