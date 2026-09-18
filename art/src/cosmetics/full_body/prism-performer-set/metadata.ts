import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "prism-performer-set",
  name: msg`Prism performer`,
  slot: "full_body",
  rarity: "epic",
} as const satisfies CosmeticMetadata;
