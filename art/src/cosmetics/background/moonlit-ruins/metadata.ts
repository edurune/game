import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "moonlit-ruins",
  name: msg`Moonlit ruins`,
  slot: "background",
  rarity: "epic",
} as const satisfies CosmeticMetadata;
