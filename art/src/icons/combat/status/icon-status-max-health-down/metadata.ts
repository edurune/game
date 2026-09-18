import type { CombatIconMetadata } from "../../../../types.ts";

export default {
  id: "icon-status-max-health-down",
  category: "status",
  stat: "maxHealth",
  direction: "down",
} as const satisfies CombatIconMetadata;
