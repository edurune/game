import { inspectItem } from "./assets.ts";
import { inspectCoverage } from "./coverage.ts";
import type { WardrobeBundle } from "./api.ts";

globalThis.onmessage = (event: MessageEvent<WardrobeBundle>) => {
  try {
    const { items, rig } = event.data;
    const base = items.find((item) => item.slot === "base");
    if (!base) throw new Error("Missing character body");
    postMessage({
      result: {
        bounds: Object.fromEntries(items.map((item) => [item.id, inspectItem(item, rig)])),
        coverage: Object.fromEntries(
          items.map((item) => [item.id, inspectCoverage(item, base, rig)]),
        ),
      },
    });
  } catch (error) {
    postMessage({ error: error instanceof Error ? error.message : String(error) });
  }
};
