import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "glass-greenhouse",
  name: msg`Glass greenhouse`,
  slot: "background",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
