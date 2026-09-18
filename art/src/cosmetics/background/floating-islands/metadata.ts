import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "floating-islands",
  name: msg`Floating islands`,
  slot: "background",
  rarity: "epic",
} as const satisfies CosmeticMetadata;
