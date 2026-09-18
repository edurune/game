import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "honey-bumblebee",
  name: msg`Honey bumblebee`,
  slot: "pet",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
