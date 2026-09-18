import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "moon-moth",
  name: msg`Moon moth`,
  slot: "pet",
  rarity: "epic",
} as const satisfies CosmeticMetadata;
