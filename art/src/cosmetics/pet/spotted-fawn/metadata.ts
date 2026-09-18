import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "spotted-fawn",
  name: msg`Spotted fawn`,
  slot: "pet",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
