import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "harbor-pier",
  name: msg`Harbor pier`,
  slot: "background",
  rarity: "uncommon",
} as const satisfies CosmeticMetadata;
