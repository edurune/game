import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "soft-polo-shirt",
  name: msg`Polo shirt`,
  slot: "top",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
