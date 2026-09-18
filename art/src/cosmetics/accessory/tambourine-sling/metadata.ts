import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "tambourine-sling",
  name: msg`Tambourine sling`,
  slot: "accessory",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
