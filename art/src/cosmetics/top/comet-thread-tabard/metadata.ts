import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "comet-thread-tabard",
  name: msg`Comet tabard`,
  slot: "top",
  rarity: "epic",
} as const satisfies CosmeticMetadata;
