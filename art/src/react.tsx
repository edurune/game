import {
  useCallback,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  type ComponentPropsWithoutRef,
  type RefObject,
} from "react";
import { artwork } from "./artwork.ts";
import { bindMotion } from "./motion/player.ts";
import { compose } from "./compose.ts";
import { composeShopScene } from "./scenes/shop/compose.ts";
import { composeBattle, battleActors } from "./battle/compose.ts";
import { bindEffect } from "./effects/sample.ts";
import { composeCombatIcon } from "./icons/compose.ts";
import { terrainUrls } from "./assets.ts";
import type {
  ArtItem,
  ArtRig,
  BattleArt,
  BattleFrame,
  BattleOptions,
  ClipName,
  MotionDefinition,
  Palette,
} from "./types.ts";
import type { CosmeticId } from "./cosmetics/index.ts";
import type { HairstyleId } from "./characters/hair/index.ts";
import type { EnemyId } from "./enemies/index.ts";
import type { RegionId } from "./regions/index.ts";
import type { EffectId } from "./effects/index.ts";
import type { CombatIconId } from "./icons/combat/index.ts";
import type { EquipmentId } from "./equipments/index.ts";
import { equipmentComponents } from "./component-maps.ts";
import { useArtMotion } from "./use-art-motion.ts";

export interface ArtProps extends Omit<
  ComponentPropsWithoutRef<"div">,
  "children" | "dangerouslySetInnerHTML"
> {
  /** Localized accessible name. Omit for decorative artwork. */
  label?: string;
}
interface SurfaceProps extends ArtProps {
  markup: string;
  containerRef?: RefObject<HTMLDivElement | null>;
}
function Surface({ markup, label, style, containerRef, ...props }: SurfaceProps) {
  return (
    <div
      {...props}
      ref={containerRef}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      style={{ display: "block", ...style }}
      dangerouslySetInnerHTML={{
        __html: markup.replace(
          / width="[^"]+" height="[^"]+"/,
          ' width="100%" height="100%" aria-hidden="true"',
        ),
      }}
    />
  );
}
function useInstance(prefix: string) {
  return `${prefix}-${useId()
    .replace(/[^a-z0-9]/gi, "")
    .toLowerCase()}`;
}
function requireItem<T extends ArtItem>(items: Readonly<Record<string, T>>, id: string): T {
  const item = items[id];
  if (!item) throw new Error(`Unknown artwork: ${id}`);
  return item;
}
function characterSelection(cosmeticIds: readonly CosmeticId[], hairStyle: HairstyleId | "none") {
  return [artwork.bodyId, ...(hairStyle === "none" ? [] : [hairStyle]), ...cosmeticIds].join("/");
}
function useMotionRoot(
  markup: string,
  definition: MotionDefinition,
  rig: ArtRig,
  clip: ClipName,
  animated: boolean,
) {
  const root = useRef<HTMLDivElement>(null);
  const bind = useCallback(
    (element: Element) => {
      const update = bindMotion(element, definition, rig);
      return (time: number) => update(clip, time);
    },
    [definition, rig, clip],
  );
  useArtMotion(root, markup, bind, animated);
  return root;
}

export interface CharacterPortraitProps extends ArtProps {
  cosmeticIds: readonly CosmeticId[];
  hairStyle?: HairstyleId | "none";
  palette?: Palette;
  clip?: ClipName;
  animated?: boolean;
}
export function CharacterPortrait({
  cosmeticIds,
  hairStyle = "none",
  palette,
  clip = "idle",
  animated = true,
  style,
  ...props
}: CharacterPortraitProps) {
  const instance = useInstance("character");
  const selection = characterSelection(cosmeticIds, hairStyle);
  const markup = useMemo(() => {
    const ids = selection.split("/");
    return compose(
      artwork.rigs.character,
      ids.map((id) => requireItem(artwork.characters, id)),
      ids,
      {
        instance,
        palette,
        motion: { definition: artwork.playerMotion, owner: artwork.bodyId, clip, time: 0 },
      },
    );
  }, [selection, instance, palette, clip]);
  const root = useMotionRoot(markup, artwork.playerMotion, artwork.rigs.character, clip, animated);
  return (
    <Surface
      {...props}
      style={{ aspectRatio: "1", ...style }}
      markup={markup}
      containerRef={root}
    />
  );
}

export interface EnemyPortraitProps extends ArtProps {
  enemyId: EnemyId;
  clip?: ClipName;
  animated?: boolean;
}
export function EnemyPortrait({
  enemyId,
  clip = "idle",
  animated = true,
  style,
  ...props
}: EnemyPortraitProps) {
  const item = requireItem(artwork.enemies, enemyId);
  const instance = useInstance("enemy");
  const markup = useMemo(
    () =>
      compose(artwork.rigs.enemy, [item], [enemyId], {
        instance,
        motion: { definition: item.motion, owner: enemyId, clip, time: 0 },
      }),
    [item, enemyId, instance, clip],
  );
  const root = useMotionRoot(markup, item.motion, artwork.rigs.enemy, clip, animated);
  return (
    <Surface
      {...props}
      style={{ aspectRatio: "1", ...style }}
      markup={markup}
      containerRef={root}
    />
  );
}

export interface BattleSceneProps extends ArtProps {
  regionId: RegionId;
  enemyIds: readonly EnemyId[];
  cosmeticIds: readonly CosmeticId[];
  hairStyle?: HairstyleId | "none";
  palette?: Palette;
  layout?: "wide" | "compact";
  frame?: BattleFrame;
  animated?: boolean;
  actorClips?: Record<string, ClipName>;
  effect?: { id: EffectId; target: "player" | `enemy-${number}` };
  defeatedActors?: readonly string[];
}
export function BattleScene({
  regionId,
  enemyIds,
  cosmeticIds,
  hairStyle = "none",
  palette,
  layout = "wide",
  frame = artwork.battleFrame,
  animated = true,
  actorClips,
  effect,
  defeatedActors = [],
  style,
  ...props
}: BattleSceneProps) {
  const instance = useInstance("battle");
  const root = useRef<HTMLDivElement>(null);
  const selection = characterSelection(cosmeticIds, hairStyle);
  const lineup = enemyIds.join("/");
  const defeated = defeatedActors.join("/");
  const data = useMemo(() => {
    const ids = selection.split("/");
    const enemies = lineup.split("/");
    const battle: BattleArt = {
      frame,
      enemyRig: artwork.rigs.enemy,
      sceneRig: artwork.rigs.scene,
      effectRig: artwork.rigs.effect,
      playerMotion: artwork.playerMotion,
      enemies: enemies.map((id) => requireItem(artwork.enemies, id)),
      regions: [requireItem(artwork.regions, regionId)],
      effects: effect ? [requireItem(artwork.effects, effect.id)] : [],
    };
    const options: BattleOptions = {
      instance,
      sceneId: regionId,
      enemyIds: enemies,
      selectedIds: ids,
      palette,
      layout,
      motion: { clip: "idle", time: 0 },
      actorMotions: Object.fromEntries([
        ...Object.entries(actorClips ?? {}).map(([id, clip]) => [id, { clip, time: 0 }]),
        ...defeated
          .split("/")
          .filter(Boolean)
          .map((id) => [id, { clip: "defeat", time: Number.MAX_SAFE_INTEGER }]),
      ]),
      effect: effect ? { ...effect, time: 0 } : undefined,
    };
    const wardrobe = {
      rig: artwork.rigs.character,
      items: ids.map((id) => requireItem(artwork.characters, id)),
    };
    return { battle, options, wardrobe, markup: composeBattle(wardrobe, battle, options) };
  }, [selection, lineup, regionId, frame, effect, instance, palette, layout, actorClips, defeated]);
  const bind = useCallback(
    (element: Element) => {
      const actors = battleActors(data.wardrobe, data.battle, data.options);
      const updates = actors.map((actor) => {
        const owner =
          element.querySelector(
            `[data-motion-owner="${actor.owner}"][data-actor="${actor.key}"]`,
          ) ?? element.querySelector(`[data-actor="${actor.key}"]`);
        const update = owner ? bindMotion(owner, actor.definition, actor.rig) : undefined;
        const motion = data.options.actorMotions?.[actor.key] ?? { clip: "idle" as const, time: 0 };
        return (time: number) => update?.(motion.clip, motion.time + time);
      });
      const updateEffect = effect
        ? bindEffect(
            element,
            requireItem(artwork.effects, effect.id),
            artwork.rigs.effect,
            actors,
            { ...effect, time: 0 },
          )
        : undefined;
      return (time: number) => {
        updates.forEach((update) => update(time));
        const targetMotion = effect && data.options.actorMotions?.[effect.target];
        updateEffect?.(time, {
          clip: targetMotion?.clip ?? "idle",
          time: (targetMotion?.time ?? 0) + time,
        });
      };
    },
    [data, effect],
  );
  useArtMotion(root, data.markup, bind, animated);
  const [, , width, height] = frame.layouts[layout].viewBox;
  return (
    <Surface
      {...props}
      style={{ aspectRatio: `${width}/${height}`, ...style }}
      markup={data.markup}
      containerRef={root}
    />
  );
}

export interface EquipmentIconProps extends ArtProps {
  equipmentId: EquipmentId;
}
export function EquipmentIcon({ equipmentId, label, ...props }: EquipmentIconProps) {
  const Component = equipmentComponents[equipmentId];
  return (
    <div
      {...props}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <Component width="100%" height="100%" aria-hidden="true" />
    </div>
  );
}
export interface CombatIconProps extends ArtProps {
  iconId: CombatIconId;
  theme?: "light" | "dark";
}
export function CombatIcon({ iconId, theme = "light", style, ...props }: CombatIconProps) {
  const instance = useInstance("icon");
  const markup = useMemo(
    () =>
      composeCombatIcon(artwork.rigs.icon, requireItem(artwork.icons, iconId), { theme, instance }),
    [iconId, theme, instance],
  );
  return <Surface {...props} style={{ aspectRatio: "1", ...style }} markup={markup} />;
}
export interface RegionSceneProps extends ArtProps {
  regionId: RegionId;
}
export function RegionScene({ regionId, style, ...props }: RegionSceneProps) {
  const instance = useInstance("region");
  const markup = useMemo(
    () =>
      compose(artwork.rigs.scene, [requireItem(artwork.regions, regionId)], [regionId], {
        instance,
      }),
    [regionId, instance],
  );
  const [, , width, height] = artwork.rigs.scene.viewBox;
  return (
    <Surface {...props} style={{ aspectRatio: `${width}/${height}`, ...style }} markup={markup} />
  );
}
export interface MapTerrainProps extends ComponentPropsWithoutRef<"div"> {
  regionId?: RegionId;
}

export interface ShopSceneProps extends ArtProps {
  /** Cosmetic shown inside the fitting-room alcove. */
  backgroundId?: CosmeticId | null;
}
export function ShopScene({ backgroundId, style, ...props }: ShopSceneProps) {
  const instance = useInstance("shop");
  const markup = useMemo(
    () =>
      composeShopScene(
        artwork.rigs.scene,
        requireItem(artwork.scenes, "shop"),
        backgroundId ? requireItem(artwork.characters, backgroundId) : undefined,
        instance,
      ).replace("<svg ", '<svg preserveAspectRatio="xMidYMid slice" '),
    [backgroundId, instance],
  );
  return <Surface {...props} style={{ aspectRatio: "960/540", ...style }} markup={markup} />;
}
export function MapTerrain({ regionId, style, ...props }: MapTerrainProps) {
  return (
    <div
      {...props}
      style={{
        backgroundImage: regionId ? `url("${terrainUrls[regionId]}")` : undefined,
        backgroundSize: "100% auto",
        backgroundRepeat: "repeat-y",
        backgroundPosition: "center top",
        ...style,
      }}
    />
  );
}

function WardrobeIcon({
  id,
  palette,
  padding = 8,
  style,
  ...props
}: ArtProps & { id: string; palette?: Palette; padding?: number }) {
  const instance = useInstance("wardrobe");
  const root = useRef<HTMLDivElement>(null);
  const markup = useMemo(
    () =>
      compose(artwork.rigs.character, [requireItem(artwork.characters, id)], [id], {
        instance,
        palette,
      }),
    [id, instance, palette],
  );
  useLayoutEffect(() => {
    const svg = root.current?.querySelector("svg");
    if (!svg) return;
    const box = svg.getBBox();
    if (box.width > 0 && box.height > 0)
      svg.setAttribute(
        "viewBox",
        `${box.x - padding} ${box.y - padding} ${box.width + padding * 2} ${box.height + padding * 2}`,
      );
  }, [markup, padding]);
  return (
    <Surface
      {...props}
      style={{ aspectRatio: "1", ...style }}
      markup={markup}
      containerRef={root}
    />
  );
}
export interface CosmeticIconProps extends ArtProps {
  cosmeticId: CosmeticId;
  padding?: number;
}
export function CosmeticIcon({ cosmeticId, ...props }: CosmeticIconProps) {
  return <WardrobeIcon {...props} id={cosmeticId} />;
}
export interface HairstyleIconProps extends ArtProps {
  hairStyle: HairstyleId;
  palette?: Palette;
  padding?: number;
}
export function HairstyleIcon({ hairStyle, ...props }: HairstyleIconProps) {
  return <WardrobeIcon {...props} id={hairStyle} />;
}
