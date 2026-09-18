import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "fern-clearing",
  name: msg`Fern clearing`,
  slot: "background",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
