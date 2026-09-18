import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "cloud-pilot-set",
  name: msg`Cloud pilot`,
  slot: "full_body",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
