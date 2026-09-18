import { join } from "node:path";
import { inspectItem, loadFrame, parseAsset } from "./assets.ts";
import { catalogRoot, loadSkills, loadWardrobe } from "./catalog.ts";
import { inspectCoverage } from "./coverage.ts";
import { loadBattleArt } from "./battle/assets.ts";
import { loadEquipments } from "./equipments/assets.ts";
import { loadCombatIcons } from "./icons/assets.ts";
import { loadScenes } from "./scenes/assets.ts";
import { loadBrand } from "./brand/assets.ts";

const cache = new Map<string, Promise<unknown>>();
export function clearArtCache() {
  cache.clear();
}
function cached<T>(key: string, load: () => Promise<T>): Promise<T> {
  if (!cache.has(key))
    cache.set(
      key,
      load().catch((error) => {
        cache.delete(key);
        throw error;
      }),
    );
  return cache.get(key) as Promise<T>;
}
export type WardrobeBundle = Awaited<ReturnType<typeof loadWardrobe>>;
export type BattleBundle = Awaited<ReturnType<typeof loadBattleArt>>;
export type EquipmentBundle = Awaited<ReturnType<typeof loadEquipments>>;
export type IconBundle = Awaited<ReturnType<typeof loadCombatIcons>>;
export type SkillsBundle = Awaited<ReturnType<typeof loadSkills>>;
export type ScenesBundle = Awaited<ReturnType<typeof loadScenes>>;
export type BrandBundle = Awaited<ReturnType<typeof loadBrand>>;
export interface CharacterInspection {
  bounds: Record<string, ReturnType<typeof inspectItem>>;
  coverage: Record<string, ReturnType<typeof inspectCoverage>>;
}
function inspectCharacter(bundle: WardrobeBundle): Promise<CharacterInspection> {
  return new Promise((resolve, reject) => {
    const worker = new Worker(new URL("./inspection-worker.ts", import.meta.url).href);
    worker.onmessage = (event: MessageEvent<{ result?: CharacterInspection; error?: string }>) => {
      worker.terminate();
      if (event.data.result) resolve(event.data.result);
      else reject(new Error(event.data.error ?? "Inspection failed"));
    };
    worker.onerror = (event) => {
      worker.terminate();
      reject(new Error(event.message));
    };
    worker.postMessage(bundle);
  });
}
const loaders = {
  bundle: loadWardrobe,
  battle: loadBattleArt,
  equipments: loadEquipments,
  icons: loadCombatIcons,
  skills: loadSkills,
  scenes: loadScenes,
  brand: loadBrand,
  "character-inspection": async () => inspectCharacter(await cached("bundle", loadWardrobe)),
};
async function musicResponse(request: Request, path: string) {
  const file = Bun.file(path);
  if (!(await file.exists())) return new Response("Not found", { status: 404 });
  const headers = {
    "Content-Type": "audio/mpeg",
    "Accept-Ranges": "bytes",
    "Cache-Control": "no-cache",
  };
  const range = request.headers.get("range");
  if (!range) return new Response(file, { headers });
  const match = /^bytes=(\d*)-(\d*)$/.exec(range);
  if (!match || (!match[1] && !match[2]))
    return new Response(null, {
      status: 416,
      headers: { "Content-Range": `bytes */${file.size}` },
    });
  const start = match[1] ? Number(match[1]) : Math.max(0, file.size - Number(match[2]));
  const end = match[1] && match[2] ? Math.min(Number(match[2]), file.size - 1) : file.size - 1;
  if (start > end || start >= file.size)
    return new Response(null, {
      status: 416,
      headers: { "Content-Range": `bytes */${file.size}` },
    });
  return new Response(file.slice(start, end + 1), {
    status: 206,
    headers: {
      ...headers,
      "Content-Range": `bytes ${start}-${end}/${file.size}`,
      "Content-Length": String(end - start + 1),
    },
  });
}
export async function handleRequest(request: Request): Promise<Response> {
  const url = new URL(request.url);
  if (!["127.0.0.1", "localhost"].includes(url.hostname))
    return new Response("Local requests only", { status: 403 });
  const origin = request.headers.get("origin");
  if (origin && origin !== url.origin) return new Response("Origin mismatch", { status: 403 });
  try {
    if (request.method === "GET" && url.pathname === "/skills")
      return Response.redirect(`${url.origin}/?room=skills`, 302);
    const key = url.pathname.slice("/api/".length);
    if (
      request.method === "GET" &&
      url.pathname.startsWith("/api/") &&
      Object.hasOwn(loaders, key)
    ) {
      const load = loaders[key as keyof typeof loaders] as () => Promise<unknown>;
      return Response.json(await cached(key, load), { headers: { "Cache-Control": "no-store" } });
    }
    const encounter = /^\/music\/encounter\/([a-z][a-z0-9-]*)-(normal|boss)\.mp3$/.exec(
      url.pathname,
    );
    if (request.method === "GET" && encounter)
      return musicResponse(
        request,
        join(catalogRoot, "regions", encounter[1], `music-${encounter[2]}.mp3`),
      );
    const victory = /^\/music\/victory-(active|a|b|c)\.mp3$/.exec(url.pathname);
    if (request.method === "GET" && victory)
      return musicResponse(request, join(catalogRoot, "music/victory", `${victory[1]}.mp3`));
    const interfaceMusic = /^\/music\/interface-(menu|shop|challenges|versus)\.mp3$/.exec(
      url.pathname,
    );
    if (request.method === "GET" && interfaceMusic)
      return musicResponse(
        request,
        join(catalogRoot, "music/interface", `${interfaceMusic[1]}.mp3`),
      );
    if (request.method === "POST" && url.pathname === "/api/inspect") {
      const input: { svg?: unknown; slot?: unknown } = await request.json();
      if (
        typeof input.svg !== "string" ||
        input.svg.length > 500_000 ||
        typeof input.slot !== "string"
      )
        throw new Error("Choose an SVG below 500 KB and a fitting slot");
      const { rig, body } = await loadFrame();
      const slot = input.slot;
      if (!rig.planes.some((plane) => (plane.slots as readonly string[]).includes(slot)))
        throw new Error("Unknown fitting slot");
      const item = parseAsset(
        input.svg,
        { id: "preview-import", label: "preview-import", slot },
        rig,
      );
      return Response.json({
        item,
        bounds: inspectItem(item, rig),
        coverage: inspectCoverage(item, body, rig),
      });
    }
    return new Response("Not found", { status: 404 });
  } catch (error) {
    return Response.json(
      { error: error instanceof Error ? error.message : String(error) },
      { status: 422 },
    );
  }
}
