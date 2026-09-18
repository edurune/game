import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "fleece-zip-jacket",
  name: msg`Fleece zip jacket`,
  slot: "top",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
