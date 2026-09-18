import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "pocket-denim-jacket",
  name: msg`Pocket denim jacket`,
  slot: "top",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
