import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "star-lined-tunic",
  name: msg`Star-lined tunic`,
  slot: "top",
  rarity: "epic",
} as const satisfies CosmeticMetadata;
