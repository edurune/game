import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "smiling-otter",
  name: msg`Smiling otter`,
  slot: "pet",
  rarity: "rare",
} as const satisfies CosmeticMetadata;
