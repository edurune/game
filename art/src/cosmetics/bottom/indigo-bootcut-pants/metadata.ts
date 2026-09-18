import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "indigo-bootcut-pants",
  name: msg`Indigo bootcut pants`,
  slot: "bottom",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
