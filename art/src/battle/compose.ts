import type {
  ArtItem,
  BattleActor,
  BattleArt,
  BattleFrame,
  BattleOptions,
  Rect,
  WardrobeArt,
} from "../types.ts";
import { compose, visibleItems } from "../compose.ts";
import { effectState } from "../effects/sample.ts";

const inner = (svg: string) => svg.slice(svg.indexOf(">") + 1, svg.lastIndexOf("</svg>"));

export function actorPlacement(frame: BattleFrame, layoutName: "wide" | "compact", count: number) {
  const layout = frame.layouts[layoutName];
  if (!layout || !Number.isInteger(count) || count < 1 || count > layout.enemies.length)
    throw new Error("Unsupported battle layout or enemy count");
  const positions = layout.enemies.slice(0, count);
  const active = [layout.player, ...positions];
  // Frame-based camera bounds keep zoom stable across outfits.
  const left = Math.min(...active.map((p) => p.x - 160));
  const right = Math.max(...active.map((p) => p.x + 160));
  const top = Math.min(...active.map((p) => p.y - frame.enemy.baseline));
  const bottom = Math.max(...active.map((p) => p.y - frame.enemy.baseline + 320));
  const ratio = layout.viewBox[2] / layout.viewBox[3];
  const height = Math.max(
    bottom - top + frame.cameraPadding * 2,
    (right - left + frame.cameraPadding * 2) / ratio,
  );
  const width = height * ratio;
  if (width > layout.world[2] || height > layout.world[3])
    throw new Error("Battle scene needs more camera coverage");
  const headroom =
    Math.min(...positions.map((p) => p.y - frame.enemy.baseline)) - frame.enemy.hoverClearance;
  const x = Math.max(0, Math.min((left + right - width) / 2, layout.world[2] - width));
  const y = Math.max(
    0,
    bottom - height,
    Math.min((top + bottom - height) / 2, headroom, layout.world[3] - height),
  );
  const camera: Rect = [x, y, width, height];
  return { layout, positions, camera };
}

export function battleActors(
  wardrobe: WardrobeArt,
  battle: BattleArt,
  options: BattleOptions,
): BattleActor[] {
  const enemies = options.enemyIds.map((id) => {
    const item = battle.enemies.find((e) => e.id === id);
    if (!item) throw new Error("Unknown enemy");
    return item;
  });
  const { layout, positions } = actorPlacement(
    battle.frame,
    options.layout ?? "wide",
    enemies.length,
  );
  const selected = options.selectedIds.filter(
    (id) => wardrobe.items.find((i) => i.id === id)?.slot !== "background",
  );
  const bodyBounds = visibleItems(wardrobe.items, selected).flatMap((item) =>
    Object.entries(wardrobe.bounds?.[item.id] ?? {})
      .filter(([key]) => key.endsWith("/rest"))
      .map(([, bounds]) => bounds),
  );
  const bounds: Rect = bodyBounds.length
    ? [
        Math.min(...bodyBounds.map((b) => b[0])),
        Math.min(...bodyBounds.map((b) => b[1])),
        Math.max(...bodyBounds.map((b) => b[2])),
        Math.max(...bodyBounds.map((b) => b[3])),
      ]
    : wardrobe.rig.safeBounds;
  const actors: BattleActor[] = [
    {
      key: "player",
      owner: "round-traveler-body",
      definition: battle.playerMotion,
      rig: wardrobe.rig,
      items: wardrobe.items,
      selected,
      position: layout.player,
      bounds,
      baseline: wardrobe.rig.baseline,
    },
  ];
  for (const [index, item] of enemies.entries())
    actors.push({
      key: `enemy-${index}`,
      owner: item.id,
      definition: item.motion,
      rig: battle.enemyRig,
      items: [item],
      selected: [item.id],
      position: positions[index]!,
      bounds: item.bounds,
      baseline: battle.enemyRig.baseline,
    });
  return actors;
}

export function composeBattle(wardrobe: WardrobeArt, battle: BattleArt, options: BattleOptions) {
  const { sceneId, instance = "battle", palette, guides = false, foreground = true } = options;
  if (!/^[a-z][a-z0-9-]*$/.test(instance)) throw new Error("Invalid battle instance ID");
  const scene = battle.regions.find((region) => region.id === sceneId);
  if (!scene) throw new Error("Unknown battle scene");
  const actors = battleActors(wardrobe, battle, options);
  const { layout, camera } = actorPlacement(
    battle.frame,
    options.layout ?? "wide",
    options.enemyIds.length,
  );
  const [, , width, height] = layout.viewBox;
  const backdrop = (parts: ArtItem["parts"]) =>
    `<svg width="${layout.world[2]}" height="${layout.world[3]}" viewBox="${layout.sceneCrop.join(" ")}" preserveAspectRatio="none">${inner(compose(battle.sceneRig, [{ ...scene, parts }], [scene.id], { instance: `${instance}-scene-${parts[0]?.plane ?? "empty"}` }))}</svg>`;
  const selection = options.effect;
  const effect = selection && battle.effects.find((item) => item.id === selection.id);
  if (options.effect && !effect) throw new Error("Unknown effect");
  const state =
    effect &&
    selection &&
    effectState(
      effect,
      battle.effectRig,
      actors,
      selection,
      options.actorMotions?.[selection.target] ?? options.motion,
    );
  const effectPlane = (plane: string) => {
    if (!effect || !state) return "";
    const parts = effect.parts.filter((part) => part.plane === plane);
    if (!parts.length) return "";
    return `<g data-effect-plane="${plane}" transform="${state.transform}" opacity="${state.opacity}">${inner(compose(battle.effectRig, [{ ...effect, parts }], [effect.id], { instance: `${instance}-effect-${plane}` }))}</g>`;
  };
  const painted = actors
    .sort((a, b) => a.position.y - b.position.y)
    .map((actor) => {
      const { x, y } = actor.position;
      const left = x - 160,
        top = y - actor.baseline;
      const actorMotion = options.actorMotions?.[actor.key] ?? options.motion;
      const motion =
        actorMotion && actor.definition
          ? { ...actorMotion, definition: actor.definition, owner: actor.owner }
          : undefined;
      const art = compose(actor.rig, actor.items, actor.selected, {
        palette,
        instance: `${instance}-${actor.key}`,
        motion,
      });
      return `<g data-actor="${actor.key}"${motion ? ` data-motion-owner="${actor.owner}"` : ""}><ellipse cx="${x}" cy="${y + 2}" rx="${(actor.bounds[2] - actor.bounds[0]) * 0.36}" ry="7" fill="#303047" opacity="0.12"/><g transform="translate(${left} ${top})">${inner(art)}</g></g>`;
    })
    .join("");
  const overlays = guides
    ? actors
        .map((actor) => {
          const { x, y } = actor.position;
          const [a, b, c, d] = actor.bounds;
          const left = x + a - 160,
            top = y + b - actor.baseline;
          return `<rect x="${left}" y="${top}" width="${c - a}" height="${d - b}" fill="none" stroke="#426e68" stroke-dasharray="4 4"/><path d="M${x - 12} ${y}H${x + 12}M${x} ${y - 8}V${y + 8}" stroke="#426e68"/>`;
        })
        .join("")
    : "";
  const front = foreground ? backdrop(scene.parts.filter((p) => p.plane === "foreground")) : "";
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="${camera.join(" ")}">${backdrop(scene.parts.filter((p) => p.plane !== "foreground"))}${effectPlane("back")}${painted}${front}${effectPlane("front")}${overlays}</svg>`;
}
