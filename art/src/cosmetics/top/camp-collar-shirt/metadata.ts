import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "camp-collar-shirt",
  name: msg`Camp collar shirt`,
  slot: "top",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
