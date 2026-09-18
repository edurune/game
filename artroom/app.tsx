import { Component, useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { bindEffect } from "@edurune/art/rendering";
import { bindMotion } from "@edurune/art/rendering";
import { compose } from "@edurune/art/rendering";
import { composeBattle, battleActors } from "@edurune/art/rendering";
import { composeCombatIcon } from "@edurune/art/rendering";
import { composeShopScene } from "@edurune/art/rendering";
import type { BattleOptions, ClipName, Palette } from "@edurune/art";
import type {
  BattleBundle,
  BrandBundle,
  CharacterInspection,
  EquipmentBundle,
  IconBundle,
  ScenesBundle,
  SkillsBundle,
  WardrobeBundle,
} from "./api.ts";
import type { WardrobeItem } from "./catalog.ts";
import { Backgrounds } from "./backgrounds.tsx";
import "./style.css";

const tabs = {
  character: "Character",
  enemies: "Enemies",
  battle: "Battle",
  regions: "Region",
  scenes: "Scenes",
  backgrounds: "Backgrounds",
  equipments: "Equipment",
  icons: "Icons",
  skills: "Skills",
  music: "Music",
  brand: "Brand",
};
type Tab = keyof typeof tabs;
const requests = new Map<string, Promise<unknown>>();
async function api<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`/api/${path}`, init);
  const result = await response.json();
  if (!response.ok) throw new Error(result.error ?? "Unable to load assets");
  return result as T;
}
function useData<T>(path: string, revision: number) {
  const [state, setState] = useState<{ data?: T; error?: string }>({});
  useEffect(() => {
    let active = true;
    const key = `${path}:${revision}`;
    if (!requests.has(key)) requests.set(key, api<T>(path));
    setState({});
    void requests.get(key)!.then(
      (data) => {
        if (active) setState({ data: data as T });
      },
      (error) => {
        if (active) setState({ error: String(error.message ?? error) });
      },
    );
    return () => {
      active = false;
    };
  }, [path, revision]);
  return state;
}
function Status({ error, children }: { error?: string; children?: ReactNode }) {
  return error ? <p role="alert">{error}</p> : <p role="status">{children ?? "Loading…"}</p>;
}
function Select({
  label,
  value,
  onChange,
  values,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  values: readonly (string | { id: string; label?: string })[];
}) {
  return (
    <label>
      {label}
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        {values.map((value) => {
          const option = typeof value === "string" ? { id: value, label: value || "None" } : value;
          return (
            <option key={option.id} value={option.id}>
              {option.label ?? option.id}
            </option>
          );
        })}
      </select>
    </label>
  );
}
function Toggle({
  label,
  value,
  onChange,
}: {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <label className="toggle">
      <input type="checkbox" checked={value} onChange={(event) => onChange(event.target.checked)} />
      {label}
    </label>
  );
}
function download(markup: string, name: string) {
  const url = URL.createObjectURL(new Blob([markup], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = `${name}.svg`;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
type Bind = (element: Element) => (time: number) => void;
function Preview({
  markup,
  bind,
  playing = false,
  time = 0,
  speed = 1,
  dark = false,
  className = "",
  label,
}: {
  markup: string;
  bind?: Bind;
  playing?: boolean;
  time?: number;
  speed?: number;
  dark?: boolean;
  className?: string;
  label: string;
}) {
  const root = useRef<HTMLDivElement>(null);
  const playhead = useRef({ markup, time, elapsed: time });
  useEffect(() => {
    if (!root.current || !bind) return;
    if (playhead.current.markup !== markup || playhead.current.time !== time)
      playhead.current = { markup, time, elapsed: time };
    const update = bind(root.current);
    let frame = 0,
      previous = 0;
    update(playhead.current.elapsed);
    const tick = (now: number) => {
      playhead.current.elapsed += previous ? (now - previous) * speed : 0;
      previous = now;
      update(playhead.current.elapsed);
      frame = requestAnimationFrame(tick);
    };
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      cancelAnimationFrame(frame);
      previous = 0;
      if (playing && !document.hidden && !preference.matches) frame = requestAnimationFrame(tick);
    };
    document.addEventListener("visibilitychange", sync);
    preference.addEventListener("change", sync);
    sync();
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("visibilitychange", sync);
      preference.removeEventListener("change", sync);
    };
  }, [markup, bind, playing, time, speed]);
  return (
    <div
      ref={root}
      role="img"
      aria-label={label}
      className={`preview ${dark ? "dark" : ""} ${className}`}
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}
function Catalog<T extends { id: string }>({
  items,
  children,
}: {
  items: readonly T[];
  children: (item: T) => ReactNode;
}) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("A–Z");
  const matches = items
    .filter((item) => item.id.includes(query.toLowerCase()))
    .slice()
    .sort((a, b) => a.id.localeCompare(b.id) * (sort === "A–Z" ? 1 : -1));
  return (
    <section className="panel">
      <div className="filters">
        <label>
          Search
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="ID…"
          />
        </label>
        <Select label="Sort" value={sort} onChange={setSort} values={["A–Z", "Z–A"]} />
        <span role="status">{matches.length} items</span>
      </div>
      <div className="grid">
        {matches.map((item) => (
          <article className="card" key={item.id}>
            <h3>{item.id}</h3>
            {children(item)}
          </article>
        ))}
      </div>
      {!matches.length && <p>No matches</p>}
    </section>
  );
}
function MusicTrack({ src, label, loop = true }: { src: string; label: string; loop?: boolean }) {
  return (
    <label className="track">
      {label}
      <audio
        controls
        preload="none"
        loop={loop}
        src={src}
        aria-label={label}
        onPlay={(event) => {
          document.querySelectorAll("audio").forEach((audio) => {
            if (audio !== event.currentTarget) audio.pause();
          });
        }}
      />
    </label>
  );
}
type Outfit = Record<string, string | null>;
function starter(bundle: WardrobeBundle): Outfit {
  return { base: bundle.items.find((item) => item.slot === "base")!.id, ...bundle.defaultOutfit };
}
const selectedIds = (outfit: Outfit) =>
  Object.values(outfit).filter((id): id is string => Boolean(id));
function Character({
  revision,
  outfit,
  onOutfit,
  palette,
  onPalette,
}: {
  revision: number;
  outfit: Outfit | null;
  onOutfit: (outfit: Outfit) => void;
  palette: Palette;
  onPalette: (palette: Palette) => void;
}) {
  const { data, error } = useData<WardrobeBundle>("bundle", revision);
  const [inspection, setInspection] = useState<CharacterInspection>();
  const [inspectionError, setInspectionError] = useState("");
  const [pose, setPose] = useState("rest");
  const [mirror, setMirror] = useState(false);
  const [explode, setExplode] = useState(false);
  const [dark, setDark] = useState(false);
  const [guides, setGuides] = useState(false);
  const [hidden, setHidden] = useState<string[]>([]);
  const [slot, setSlot] = useState("");
  const [rarity, setRarity] = useState("");
  const [importSlot, setImportSlot] = useState("top");
  const [imported, setImported] = useState<WardrobeItem>();
  useEffect(() => {
    if (!data) return;
    let active = true;
    setInspection(undefined);
    setInspectionError("");
    void api<CharacterInspection>("character-inspection").then(
      (result) => {
        if (active) setInspection(result);
      },
      (error) => {
        if (active) setInspectionError(error.message);
      },
    );
    return () => {
      active = false;
    };
  }, [data]);
  if (!data) return <Status error={error} />;
  const current = outfit ?? starter(data);
  const items = imported ? [...data.items, imported] : data.items;
  const ids = selectedIds(current).filter((id) => items.some((item) => item.id === id));
  const options = { pose, mirror, explode, palette, hidden, instance: "character-review" };
  const svg = compose(data.rig, items, ids, options);
  const guideMarkup = guides
    ? svg.replace(
        "</svg>",
        `<rect x="16" y="16" width="288" height="288" fill="none" stroke="#cc5544" stroke-dasharray="4 4"/></svg>`,
      )
    : svg;
  const pick = (item: WardrobeItem) => {
    onOutfit({ ...current, [item.slot]: item.id });
    setHidden([]);
  };
  return (
    <>
      <div className="workbench">
        <aside className="panel controls">
          <h2>Wardrobe</h2>
          {[...new Set(items.map((item) => item.slot))].map((slot) => (
            <Select
              key={slot}
              label={slot}
              value={current[slot] ?? ""}
              values={[
                ...(slot === "base" ? [] : [""]),
                ...items.filter((item) => item.slot === slot),
              ]}
              onChange={(id) => {
                onOutfit({ ...current, [slot]: id });
                setHidden([]);
              }}
            />
          ))}
          <button
            onClick={() => {
              onOutfit(starter(data));
              setHidden([]);
            }}
          >
            Starter outfit
          </button>
          <h2>Appearance</h2>
          {Object.entries(data.rig.palette).map(([channel, color]) => (
            <label key={channel}>
              {channel}
              <input
                type="color"
                value={palette[channel as keyof Palette] ?? color}
                onChange={(event) => onPalette({ ...palette, [channel]: event.target.value })}
              />
            </label>
          ))}
          <Select
            label="Pose"
            value={pose}
            onChange={setPose}
            values={Object.keys(data.rig.poses)}
          />
          <Toggle label="Mirror" value={mirror} onChange={setMirror} />
          <Toggle label="Separate layers" value={explode} onChange={setExplode} />
          <Toggle label="Guides" value={guides} onChange={setGuides} />
          <Toggle label="Dark backdrop" value={dark} onChange={setDark} />
          <button onClick={() => download(svg, data.rig.id)}>Download SVG</button>
          <Select
            label="Import slot"
            value={importSlot}
            onChange={setImportSlot}
            values={[
              "top",
              "bottom",
              "shoes",
              "hat",
              "accessory",
              "full_body",
              "pet",
              "background",
              "hair",
            ]}
          />
          <label>
            Try SVG
            <input
              type="file"
              accept=".svg,image/svg+xml"
              onChange={async (event) => {
                const file = event.target.files?.[0];
                if (!file) return;
                try {
                  if (file.size > 500_000) throw new Error("Choose an SVG below 500 KB");
                  const result = await api<{ item: WardrobeItem }>("inspect", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ svg: await file.text(), slot: importSlot }),
                  });
                  setImported(result.item);
                  onOutfit({ ...current, [importSlot]: result.item.id });
                } catch (error) {
                  setInspectionError(error instanceof Error ? error.message : String(error));
                }
                event.target.value = "";
              }}
            />
          </label>
        </aside>
        <section className="panel">
          <Preview markup={guideMarkup} label="Character preview" dark={dark} />
          <div className="samples">
            {Object.keys(data.rig.poses).map((pose) => (
              <figure key={pose}>
                <Preview
                  markup={compose(data.rig, items, ids, {
                    ...options,
                    pose,
                    explode: false,
                    instance: `pose-${pose}`,
                  })}
                  label={pose}
                />
                <figcaption>{pose}</figcaption>
              </figure>
            ))}
            <figure className="small">
              <Preview markup={svg} label="64px character" />
              <figcaption>64 px</figcaption>
            </figure>
          </div>
          {inspectionError && <Status error={inspectionError} />}
          <details>
            <summary>Layers</summary>
            {items
              .filter((item) => ids.includes(item.id))
              .flatMap((item) =>
                item.parts.map((part) => {
                  const key = `${item.id}/${part.plane}`;
                  return (
                    <Toggle
                      key={key}
                      label={key}
                      value={!hidden.includes(key)}
                      onChange={(visible) =>
                        setHidden(visible ? hidden.filter((id) => id !== key) : [...hidden, key])
                      }
                    />
                  );
                }),
              )}
          </details>
          {inspection &&
            Object.entries(inspection.coverage)
              .filter(([id]) => ids.includes(id))
              .flatMap(([id, checks]) =>
                checks
                  .filter((check) => check.pixels > 0)
                  .map((check) => (
                    <p role="alert" key={`${id}/${check.id}`}>
                      {id}: {check.id}, {check.pixels} exposed pixels
                    </p>
                  )),
              )}
        </section>
      </div>
      <section className="filters">
        <Select
          label="Slot"
          value={slot}
          onChange={setSlot}
          values={["", ...new Set(items.map((item) => item.slot))]}
        />
        <Select
          label="Rarity"
          value={rarity}
          onChange={setRarity}
          values={["", "common", "uncommon", "rare", "epic", "legendary"]}
        />
      </section>
      <Catalog
        items={items.filter(
          (item) =>
            item.slot !== "base" &&
            (!slot || item.slot === slot) &&
            (!rarity || item.rarity === rarity),
        )}
      >
        {(item) => (
          <>
            <Preview
              markup={compose(data.rig, [item], [item.id], {
                palette,
                instance: `card-${item.id}`,
              })}
              label={item.id}
              dark={dark}
            />
            <small>
              {item.slot}
              {item.rarity ? ` · ${item.rarity}` : ""}
            </small>
            <button onClick={() => pick(item)}>Use</button>
          </>
        )}
      </Catalog>
    </>
  );
}
function MotionControls({
  clip,
  setClip,
  playing,
  setPlaying,
  time,
  setTime,
  speed,
  setSpeed,
  duration,
}: {
  clip: string;
  setClip: (clip: string) => void;
  playing: boolean;
  setPlaying: (value: boolean) => void;
  time: number;
  setTime: (value: number) => void;
  speed: number;
  setSpeed: (value: number) => void;
  duration: number;
}) {
  return (
    <div className="filters">
      <Select
        label="Motion"
        value={clip}
        onChange={(value) => {
          setClip(value);
          setTime(0);
        }}
        values={["still", "idle", "attack", "hit", "defeat"]}
      />
      <button onClick={() => setPlaying(!playing)}>{playing ? "Pause" : "Play"}</button>
      <button
        onClick={() => {
          setTime(time ? 0 : 0.001);
          setPlaying(true);
        }}
      >
        Restart
      </button>
      <Select
        label="Speed"
        value={String(speed)}
        onChange={(value) => setSpeed(Number(value))}
        values={["0.25", "0.5", "1"]}
      />
      <label>
        Frame
        <input
          type="range"
          min="0"
          max={duration}
          value={Math.min(time, duration)}
          onChange={(event) => {
            setPlaying(false);
            setTime(Number(event.target.value));
          }}
        />
      </label>
    </div>
  );
}
function Enemies({ revision, onBattle }: { revision: number; onBattle: (id: string) => void }) {
  const { data, error } = useData<BattleBundle>("battle", revision);
  const [id, setId] = useState("");
  const [clip, setClip] = useState("idle");
  const [playing, setPlaying] = useState(true);
  const [time, setTime] = useState(0);
  const [speed, setSpeed] = useState(1);
  const item = data?.enemies.find((item) => item.id === id) ?? data?.enemies[0];
  const bind = useCallback(
    (root: Element) => {
      if (!item || !data || clip === "still") return () => {};
      const update = bindMotion(root, item.motion, data.enemyRig);
      return (time: number) => update(clip as ClipName, time);
    },
    [item, data, clip],
  );
  if (!data || !item) return <Status error={error} />;
  const markup = compose(data.enemyRig, [item], [item.id], {
    instance: "enemy-review",
    motion:
      clip === "still"
        ? undefined
        : { definition: item.motion, owner: item.id, clip: clip as ClipName, time },
  });
  return (
    <>
      <section className="panel">
        <h2>{item.id}</h2>
        <MotionControls
          {...{ clip, setClip, playing, setPlaying, time, setTime, speed, setSpeed }}
          duration={clip === "still" ? 1 : item.motion.clips[clip as ClipName].duration}
        />
        <div className="samples">
          <Preview
            markup={markup}
            label={item.id}
            bind={bind}
            playing={playing}
            time={time}
            speed={speed}
          />
          <div className="small">
            <Preview markup={markup} label={`${item.id} 64px`} />
          </div>
        </div>
        <small>bounds [{item.bounds.join(", ")}]</small>
        <div className="filters">
          <button onClick={() => onBattle(item.id)}>Preview in Battle</button>
          <button onClick={() => download(markup, item.id)}>Download SVG</button>
        </div>
      </section>
      <Catalog items={data.enemies}>
        {(enemy) => (
          <>
            <Preview
              markup={compose(data.enemyRig, [enemy], [enemy.id], {
                instance: `enemy-${enemy.id}`,
              })}
              label={enemy.id}
            />
            <button
              onClick={() => {
                setId(enemy.id);
                setTime(0);
              }}
            >
              Inspect
            </button>
          </>
        )}
      </Catalog>
    </>
  );
}
function Battle({
  revision,
  outfit,
  palette,
  inspectId,
}: {
  revision: number;
  outfit: Outfit | null;
  palette: Palette;
  inspectId: string;
}) {
  const { data, error } = useData<BattleBundle>("battle", revision);
  const wardrobe = useData<WardrobeBundle>("bundle", revision);
  const [region, setRegion] = useState("forest-clearing");
  const [enemyIds, setEnemies] = useState<string[]>(
    inspectId ? [inspectId] : ["moss-slime", "acornling", "capling"],
  );
  const [layout, setLayout] = useState("wide");
  const [clip, setClip] = useState("still");
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [effect, setEffect] = useState("");
  const [target, setTarget] = useState("enemy-0");
  const [guides, setGuides] = useState(false);
  const [foreground, setForeground] = useState(true);
  const options: BattleOptions = {
    sceneId: region,
    enemyIds,
    selectedIds: wardrobe.data
      ? selectedIds(outfit ?? starter(wardrobe.data)).filter((id) =>
          wardrobe.data!.items.some((item) => item.id === id),
        )
      : [],
    instance: "battle-review",
    palette,
    layout: layout as "wide" | "compact",
    guides,
    foreground,
    motion: clip === "still" ? undefined : { clip: clip as ClipName, time },
    effect: effect
      ? { id: effect, target: target as "player" | `enemy-${number}`, time }
      : undefined,
  };
  const bind = useCallback(
    (root: Element) => {
      if (!data || !wardrobe.data) return () => {};
      const actors = battleActors(wardrobe.data, data, options);
      const updates =
        clip === "still"
          ? []
          : actors.map((actor) =>
              bindMotion(
                root.querySelector(`[data-actor="${actor.key}"]`)!,
                actor.definition,
                actor.rig,
              ),
            );
      const item = data.effects.find((item) => item.id === effect);
      const updateEffect =
        item && options.effect
          ? bindEffect(root, item, data.effectRig, actors, options.effect)
          : undefined;
      return (time: number) => {
        updates.forEach((update) => update(clip as ClipName, time));
        updateEffect?.(time, clip === "still" ? undefined : { clip: clip as ClipName, time });
      };
    },
    [data, wardrobe.data, clip, effect, target, enemyIds, region, layout, outfit, palette],
  );
  if (!data || !wardrobe.data) return <Status error={error ?? wardrobe.error} />;
  const markup = composeBattle(wardrobe.data, data, options);
  const selectedRegion = data.regions.find((item) => item.id === region)!;
  const duration = Math.max(
    1,
    ...(clip === "still"
      ? []
      : [
          data.playerMotion.clips[clip as ClipName].duration,
          ...data.enemies
            .filter((item) => enemyIds.includes(item.id))
            .map((item) => item.motion.clips[clip as ClipName].duration),
        ]),
    data.effects.find((item) => item.id === effect)?.clip.duration ?? 0,
  );
  const lineup = (boss: boolean) => {
    const set = data.sets.find((set) => set.region === region)!;
    setEnemies(boss ? [set.boss, ...set.enemies] : [...set.enemies]);
    if (!boss && target === "enemy-3") setTarget("enemy-0");
  };
  return (
    <>
      <div className="workbench">
        <aside className="panel controls">
          <h2>Battle</h2>
          <Select label="Region" value={region} onChange={setRegion} values={data.regions} />
          <div className="filters">
            <button onClick={() => lineup(false)}>Group</button>
            <button onClick={() => lineup(true)}>Boss</button>
          </div>
          <Select label="View" value={layout} onChange={setLayout} values={["wide", "compact"]} />
          <Select
            label="Enemy count"
            value={String(enemyIds.length)}
            values={["1", "2", "3", "4"]}
            onChange={(value) => {
              const count = Number(value);
              setEnemies(
                Array.from(
                  { length: count },
                  (_, index) => enemyIds[index] ?? data.enemies[index].id,
                ),
              );
              if (target !== "player" && Number(target.slice(6)) >= count) setTarget("enemy-0");
            }}
          />
          {enemyIds.map((id, index) => (
            <Select
              key={index}
              label={`Enemy ${index + 1}`}
              value={id}
              values={data.enemies}
              onChange={(id) => setEnemies(enemyIds.map((old, i) => (index === i ? id : old)))}
            />
          ))}
          <Select
            label="Effect"
            value={effect}
            values={["", ...data.effects]}
            onChange={(value) => {
              setEffect(value);
              setTime(0);
            }}
          />
          <Select
            label="Target"
            value={target}
            values={["player", ...enemyIds.map((_, index) => `enemy-${index}`)]}
            onChange={setTarget}
          />
          <Toggle label="Guides" value={guides} onChange={setGuides} />
          <Toggle label="Foreground" value={foreground} onChange={setForeground} />
          <button onClick={() => download(markup, `${region}-battle`)}>Download SVG</button>
        </aside>
        <section className="panel">
          <MotionControls
            {...{ clip, setClip, playing, setPlaying, time, setTime, speed, setSpeed, duration }}
          />
          <Preview
            markup={markup}
            label="Battle preview"
            bind={bind}
            playing={playing}
            time={time}
            speed={speed}
            className="battle-preview"
          />
          <details>
            <summary>Map terrain</summary>
            <div className="terrain-strip">
              {[0, 1, 2].map((index) => (
                <Preview
                  key={index}
                  markup={compose(data.terrainRig, [selectedRegion.terrain], [region], {
                    instance: `terrain-${index}`,
                  })}
                  label={`${region} repeat ${index + 1}`}
                />
              ))}
            </div>
          </details>
        </section>
      </div>
      <Catalog items={data.effects}>
        {(item) => (
          <>
            <Preview
              markup={compose(data.effectRig, [item], [item.id], { instance: `effect-${item.id}` })}
              label={item.id}
            />
            <small>
              {item.kind} · {item.clip.duration} ms · {item.clip.anchor}
            </small>
            <button
              onClick={() => {
                setEffect(item.id);
                setTime(0);
              }}
            >
              Use
            </button>
          </>
        )}
      </Catalog>
    </>
  );
}
function Regions({ revision, musicOnly = false }: { revision: number; musicOnly?: boolean }) {
  const { data, error } = useData<BattleBundle>("battle", revision);
  const [variant, setVariant] = useState("");
  if (!data) return <Status error={error} />;
  if (musicOnly) {
    const tracks = [
      ...data.regions.flatMap((region) =>
        (["normal", "boss"] as const).map((type) => ({
          id: `${region.id}-${type}`,
          type: type as string,
          src: region.music[type],
        })),
      ),
      ...["active", "a", "b", "c"].map((id) => ({
        id: `victory-${id}`,
        type: "victory",
        src: `/music/victory-${id}.mp3`,
      })),
      ...["menu", "shop", "challenges", "versus"].map((id) => ({
        id: `interface-${id}`,
        type: "interface",
        src: `/music/interface-${id}.mp3`,
      })),
    ];
    return (
      <>
        <Select
          label="Type"
          value={variant}
          values={["", "normal", "boss", "victory", "interface"]}
          onChange={setVariant}
        />
        <Catalog items={tracks.filter((track) => !variant || track.type === variant)}>
          {(track) => (
            <MusicTrack src={track.src} label={track.type} loop={track.type !== "victory"} />
          )}
        </Catalog>
      </>
    );
  }
  return (
    <Catalog items={data.regions}>
      {(region) => (
        <>
          <div className="region-visuals">
            <figure>
              <Preview
                markup={compose(data.sceneRig, [region], [region.id], {
                  instance: `scene-${region.id}`,
                })}
                label={`${region.id} scene`}
              />
              <figcaption>Scene</figcaption>
            </figure>
            <figure>
              <Preview
                markup={compose(data.terrainRig, [region.terrain], [region.id], {
                  instance: `map-${region.id}`,
                })}
                label={`${region.id} map`}
              />
              <figcaption>Map</figcaption>
            </figure>
          </div>
          <MusicTrack src={region.music.normal} label={`${region.id} normal`} />
          <MusicTrack src={region.music.boss} label={`${region.id} boss`} />
        </>
      )}
    </Catalog>
  );
}
function Scenes({ revision }: { revision: number }) {
  const { data, error } = useData<ScenesBundle>("scenes", revision);
  const [selected, setSelected] = useState("shop");
  const [backgroundId, setBackgroundId] = useState("");
  const [source, setSource] = useState("");
  const inspector = useRef<HTMLElement>(null);
  if (!data) return <Status error={error} />;
  const scene = data.items.find((item) => item.id === selected)!;
  const background = data.backgrounds.find((item) => item.id === backgroundId);
  const markup =
    scene.id === "shop"
      ? composeShopScene(data.rig, scene, background, `scene-${scene.id}`)
      : compose(data.rig, [scene], [scene.id], { instance: `scene-${scene.id}` });
  return (
    <>
      <section ref={inspector} className="panel">
        <div className="filters">
          <Select label="Scene" value={selected} onChange={setSelected} values={data.items} />
          {scene.id === "shop" && (
            <Select
              label="Alcove background"
              value={backgroundId}
              onChange={setBackgroundId}
              values={["", ...data.backgrounds]}
            />
          )}
          <span>Painted bounds: {scene.bounds.join(", ")}</span>
          <button onClick={() => download(markup, scene.id)}>Download SVG</button>
        </div>
        <Preview markup={markup} label={scene.id} className="battle-preview" />
        <details>
          <summary>Plane bounds</summary>
          <pre>{JSON.stringify(scene.partBounds, null, 2)}</pre>
        </details>
        <Preview markup={markup} label={`${scene.id} at 64 px`} className="small" />
      </section>
      <Select
        label="Source"
        value={source}
        onChange={setSource}
        values={["", "interface", "region"]}
      />
      <Catalog items={data.items.filter((item) => !source || item.source === source)}>
        {(item) => (
          <>
            <Preview
              markup={compose(data.rig, [item], [item.id], { instance: `thumbnail-${item.id}` })}
              label={item.id}
            />
            <small>
              {item.source} · [{item.bounds.join(", ")}]
            </small>
            <button
              aria-pressed={selected === item.id}
              onClick={() => {
                setSelected(item.id);
                inspector.current?.scrollIntoView({ block: "start" });
              }}
            >
              Inspect
            </button>
          </>
        )}
      </Catalog>
    </>
  );
}
function Equipment({ revision }: { revision: number }) {
  const { data, error } = useData<EquipmentBundle>("equipments", revision);
  const [slot, setSlot] = useState("");
  const [dark, setDark] = useState(false);
  if (!data) return <Status error={error} />;
  return (
    <>
      <div className="filters">
        <Select
          label="Slot"
          value={slot}
          onChange={setSlot}
          values={["", "weapon", "armor", "charm"]}
        />
        <Toggle label="Dark backdrop" value={dark} onChange={setDark} />
      </div>
      <Catalog items={data.items.filter((item) => !slot || item.slot === slot)}>
        {(item) => {
          const svg = compose(data.rig, [item], [item.id], { instance: `equipment-${item.id}` });
          return (
            <>
              <Preview markup={svg} label={item.id} dark={dark} />
              <small>
                {item.slot} · [{item.bounds.join(", ")}]
              </small>
              <button onClick={() => download(svg, item.id)}>Download SVG</button>
            </>
          );
        }}
      </Catalog>
    </>
  );
}
function Brand({ revision }: { revision: number }) {
  const { data, error } = useData<BrandBundle>("brand", revision);
  const [dark, setDark] = useState(false);
  const [guides, setGuides] = useState(false);
  if (!data) return <Status error={error} />;
  return (
    <section className="panel">
      <div className="filters">
        <Toggle label="Dark surface" value={dark} onChange={setDark} />
        <Toggle label="Painted bounds" value={guides} onChange={setGuides} />
      </div>
      {data.map((item) => {
        const [left, top, right, bottom] = item.bounds;
        const markup = guides
          ? item.source.replace(
              "</svg>",
              `<rect x="${left}" y="${top}" width="${right - left}" height="${bottom - top}" fill="none" stroke="#d39b84" stroke-width="1"/></svg>`,
            )
          : item.source;
        return (
          <article className="card brand-card" key={item.id}>
            <h3>{item.id}</h3>
            <small>
              {item.kind} · {item.frame.viewBox[2]} × {item.frame.viewBox[3]} · painted [
              {item.bounds.join(", ")}]
            </small>
            <div className={`brand-sizes ${dark ? "dark" : ""}`}>
              {item.frame.reviewSizes.map((size) => (
                <figure key={size} style={{ width: size }}>
                  <Preview markup={markup} label={`${item.id} ${size}px`} />
                  <figcaption>{size}px</figcaption>
                </figure>
              ))}
            </div>
            <button onClick={() => download(item.source, item.id)}>Download SVG</button>
          </article>
        );
      })}
    </section>
  );
}
function Icons({ revision }: { revision: number }) {
  const { data, error } = useData<IconBundle>("icons", revision);
  const [theme, setTheme] = useState("light");
  const [category, setCategory] = useState("");
  const [grayscale, setGrayscale] = useState(false);
  if (!data) return <Status error={error} />;
  return (
    <>
      <div className="filters">
        <Select label="Theme" value={theme} values={["light", "dark"]} onChange={setTheme} />
        <Select
          label="Category"
          value={category}
          values={["", ...new Set(data.items.map((item) => item.category))]}
          onChange={setCategory}
        />
        <Toggle label="Grayscale" value={grayscale} onChange={setGrayscale} />
      </div>
      <div style={{ filter: grayscale ? "grayscale(1)" : undefined }}>
        <Catalog items={data.items.filter((item) => !category || item.category === category)}>
          {(item) => (
            <>
              <div className={`icon-sizes ${theme === "dark" ? "dark" : ""}`}>
                {([24, 32, 48, 64] as const).map((size) => (
                  <figure key={size} style={{ width: size }}>
                    <Preview
                      markup={composeCombatIcon(data.rig, item, {
                        size,
                        theme: theme as "light" | "dark",
                        instance: `${item.id}-${size}`,
                      })}
                      label={`${item.id} ${size}px`}
                    />
                    <figcaption>{size}</figcaption>
                  </figure>
                ))}
              </div>
              <small>
                {item.category} · {item.reference}
              </small>
              <button
                onClick={() =>
                  download(
                    composeCombatIcon(data.rig, item, { theme: theme as "light" | "dark" }),
                    item.id,
                  )
                }
              >
                Download SVG
              </button>
            </>
          )}
        </Catalog>
      </div>
    </>
  );
}
function Skills({ revision }: { revision: number }) {
  const { data, error } = useData<SkillsBundle>("skills", revision);
  if (!data) return <Status error={error} />;
  return (
    <Catalog items={data}>
      {(item) => (
        <dl>
          {item.name && (
            <>
              <dt>Name</dt>
              <dd>{item.name.message ?? item.name.id}</dd>
            </>
          )}
          {item.description && (
            <>
              <dt>Effect</dt>
              <dd>{item.description.message ?? item.description.id}</dd>
            </>
          )}
        </dl>
      )}
    </Catalog>
  );
}
class InspectorBoundary extends Component<{ children: ReactNode }, { error?: string }> {
  state: { error?: string } = {};
  static getDerivedStateFromError(error: Error) {
    return { error: error.message };
  }
  render() {
    return this.state.error ? <Status error={this.state.error} /> : this.props.children;
  }
}
function App() {
  const requested = new URL(location.href).searchParams.get("room");
  const [tab, setTab] = useState<Tab>(
    requested && Object.hasOwn(tabs, requested) ? (requested as Tab) : "character",
  );
  const [revision, setRevision] = useState(0);
  const [outfit, setOutfit] = useState<Outfit | null>(null);
  const [palette, setPalette] = useState<Palette>({});
  const [inspectId, setInspectId] = useState("");
  const select = (tab: Tab) => {
    setTab(tab);
    const url = new URL(location.href);
    url.searchParams.set("room", tab);
    history.replaceState(null, "", url);
  };
  return (
    <>
      <header>
        <h1>Art room</h1>
        <nav aria-label="Art type">
          {Object.entries(tabs).map(([id, label]) => (
            <button key={id} aria-pressed={tab === id} onClick={() => select(id as Tab)}>
              {label}
            </button>
          ))}
        </nav>
        <button
          onClick={() => {
            requests.clear();
            setRevision(revision + 1);
          }}
        >
          Reload
        </button>
      </header>
      <main>
        <InspectorBoundary key={`${tab}:${revision}`}>
          {tab === "character" && (
            <Character
              {...{ revision, outfit, palette }}
              onOutfit={setOutfit}
              onPalette={setPalette}
            />
          )}
          {tab === "enemies" && (
            <Enemies
              revision={revision}
              onBattle={(id) => {
                setInspectId(id);
                select("battle");
              }}
            />
          )}
          {tab === "battle" && <Battle {...{ revision, outfit, palette, inspectId }} />}
          {tab === "regions" && <Regions revision={revision} />}
          {tab === "scenes" && <Scenes revision={revision} />}
          {tab === "backgrounds" && <Backgrounds />}
          {tab === "music" && <Regions revision={revision} musicOnly />}
          {tab === "equipments" && <Equipment revision={revision} />}
          {tab === "icons" && <Icons revision={revision} />}
          {tab === "skills" && <Skills revision={revision} />}
          {tab === "brand" && <Brand revision={revision} />}
        </InspectorBoundary>
      </main>
    </>
  );
}
createRoot(document.getElementById("root")!).render(<App />);
