import type { Rect } from "../types.ts";

export default {
  opening: [351, 89, 609, 376],
  background: [20, 20, 300, 300],
} as const satisfies Record<"opening" | "background", Rect>;
