import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "ao-dai",
  slot: "full_body",
  rarity: "rare",
  name: msg`Áo dài`,
  description: msg`Long tunic with side slits, worn over trousers.`,
} as const satisfies CosmeticMetadata;
