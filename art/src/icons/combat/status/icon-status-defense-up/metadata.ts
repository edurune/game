import type { CombatIconMetadata } from "../../../../types.ts";

export default {
  id: "icon-status-defense-up",
  category: "status",
  stat: "defense",
  direction: "up",
} as const satisfies CombatIconMetadata;
