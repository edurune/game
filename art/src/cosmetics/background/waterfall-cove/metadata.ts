import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "waterfall-cove",
  name: msg`Waterfall cove`,
  slot: "background",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
