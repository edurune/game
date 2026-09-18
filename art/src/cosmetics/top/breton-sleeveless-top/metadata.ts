import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "breton-sleeveless-top",
  name: msg`Striped sleeveless top`,
  slot: "top",
  rarity: "common",
} as const satisfies CosmeticMetadata;
