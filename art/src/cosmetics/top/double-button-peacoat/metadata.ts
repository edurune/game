import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "double-button-peacoat",
  name: msg`Double-breasted peacoat`,
  slot: "top",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
