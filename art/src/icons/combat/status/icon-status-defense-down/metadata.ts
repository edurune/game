import type { CombatIconMetadata } from "../../../../types.ts";

export default {
  id: "icon-status-defense-down",
  category: "status",
  stat: "defense",
  direction: "down",
} as const satisfies CombatIconMetadata;
