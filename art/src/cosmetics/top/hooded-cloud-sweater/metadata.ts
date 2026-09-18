import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "hooded-cloud-sweater",
  name: msg`Cloud hoodie`,
  slot: "top",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
