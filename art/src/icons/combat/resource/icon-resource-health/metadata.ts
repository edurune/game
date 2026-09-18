import { msg } from "@lingui/core/macro";
import type { CombatIconMetadata } from "../../../../types.ts";

export default {
  id: "icon-resource-health",
  category: "resource",
  value: "health",
  name: msg`Health`,
} as const satisfies CombatIconMetadata;
