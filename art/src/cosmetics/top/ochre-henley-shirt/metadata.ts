import { msg } from "@lingui/core/macro";
import type { CosmeticMetadata } from "../../../types.ts";

export default {
  id: "ochre-henley-shirt",
  name: msg`Ochre Henley shirt`,
  slot: "top",
  rarity: "common",
} as const satisfies CosmeticMetadata;
