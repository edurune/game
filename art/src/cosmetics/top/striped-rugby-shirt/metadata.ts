import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "striped-rugby-shirt",
  name: msg`Striped rugby shirt`,
  slot: "top",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
