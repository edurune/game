import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "crystal-cavern",
  name: msg`Crystal cavern`,
  slot: "background",
  rarity: "epic",
} as const satisfies CosmeticMetadata;
