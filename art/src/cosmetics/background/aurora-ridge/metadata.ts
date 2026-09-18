import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "aurora-ridge",
  name: msg`Aurora ridge`,
  slot: "background",
  rarity: "legendary",
} as const satisfies CosmeticMetadata;
