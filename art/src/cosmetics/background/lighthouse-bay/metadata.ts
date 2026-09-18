import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "lighthouse-bay",
  name: msg`Lighthouse bay`,
  slot: "background",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
