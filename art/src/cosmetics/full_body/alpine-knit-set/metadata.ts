import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "alpine-knit-set",
  name: msg`Alpine knit set`,
  slot: "full_body",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
