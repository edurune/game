import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "button-nose-pug",
  name: msg`Button-nose pug`,
  slot: "pet",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
