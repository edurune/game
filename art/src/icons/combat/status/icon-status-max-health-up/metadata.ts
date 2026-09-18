import { msg } from "@lingui/core/macro";
import type { CombatIconMetadata } from "../../../../types.ts";

export default {
  id: "icon-status-max-health-up",
  category: "status",
  stat: "maxHealth",
  direction: "up",
  name: msg`Maximum health increased`,
} as const satisfies CombatIconMetadata;
