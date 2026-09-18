import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "leaf-warden-set",
  name: msg`Leaf warden`,
  slot: "full_body",
  rarity: "epic",
} as const satisfies CosmeticMetadata;
