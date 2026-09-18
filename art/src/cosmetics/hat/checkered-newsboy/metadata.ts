import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "checkered-newsboy",
  name: msg`Checked newsboy cap`,
  slot: "hat",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
