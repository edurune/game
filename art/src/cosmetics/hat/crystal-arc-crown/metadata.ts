import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "crystal-arc-crown",
  name: msg`Crystal crown`,
  slot: "hat",
  rarity: "legendary",
} as const satisfies CosmeticMetadata;
