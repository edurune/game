import { useState } from "react";
import { backgroundUrls } from "@edurune/art/assets";
import type { BackgroundId } from "@edurune/art/catalog";

const backgroundIds = Object.keys(backgroundUrls) as BackgroundId[];

const copy = {
  "mode-banner": {
    title: "Mode selection · Header",
    description: "A landscape backdrop with a clear centre for a page title.",
    alt: "A path through rolling green hills, framed by weathered gateposts and a gold banner.",
    action: "",
  },
  versus: {
    title: "Versus",
    description: "Face off against other players. May the sharpest mind win.",
    alt: "Two travelers face each other, with a Grove Guardian and Moss Slime on the left and a Crystal Golem and Ember Imp on the right.",
    action: "Enter Versus",
  },
  "versus-faceoff": {
    title: "Versus · Face-off",
    description: "Face off against other players. May the sharpest mind win.",
    alt: "Two equipped travelers face each other in front of a gold-and-blue backdrop with forest and ruin silhouettes. Small monster teams wait on distant islands near the top.",
    action: "Enter Versus",
  },
  "infinite-dungeon": {
    title: "Infinite Dungeon",
    description: "Fight your way through an endless dungeon and see how deep your knowledge goes.",
    alt: "A traveler carrying a torch approaches a staircase through receding stone arches, with Cave Bats above and a Rockling beside the entrance.",
    action: "Enter the dungeon",
  },
  "infinite-dungeon-entry": {
    title: "Infinite Dungeon · Doorway",
    description: "Fight your way through an endless dungeon and see how deep your knowledge goes.",
    alt: "A low camera looks up overlapping stairways and bridges toward a traveler emerging from a high doorway on the right. A Rockling waits on another landing and a Cave Bat flies among the tall arches.",
    action: "Enter the dungeon",
  },
} satisfies Record<
  BackgroundId,
  { title: string; description: string; alt: string; action: string }
>;

export function Backgrounds() {
  const [view, setView] = useState("artwork");
  const [notice, setNotice] = useState<BackgroundId | null>(null);
  return (
    <section className="panel backgrounds">
      <div className="filters">
        <div className="backgrounds-heading">
          <h2>Backgrounds</h2>
          <p>
            Standalone illustrations for mode cards and event pages. Text stays in the interface.
          </p>
        </div>
        <label>
          Preview
          <select value={view} onChange={(event) => setView(event.target.value)}>
            <option value="artwork">Full artwork</option>
            <option value="cards">Mode cards</option>
            <option value="thumbnails">Small sizes</option>
          </select>
        </label>
      </div>
      <div className={`backgrounds-gallery backgrounds-gallery--${view}`}>
        {backgroundIds.map((id) => {
          const item = copy[id];
          const url = backgroundUrls[id];
          return (
            <article key={id} className={`background-review background-review--${view}`}>
              {view === "cards" && id === "mode-banner" ? (
                <div className="background-header-preview">
                  <img src={url} alt={item.alt} width="960" height="540" />
                  <h3>Challenges</h3>
                </div>
              ) : view === "cards" ? (
                <div className={`background-mode-card background-mode-card--${id}`}>
                  <div className="background-mode-scene">
                    <img src={url} alt={item.alt} width="960" height="540" />
                  </div>
                  <div className="background-mode-copy">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <button type="button" data-uisfx="press" onClick={() => setNotice(id)}>
                      {item.action} <span aria-hidden="true">→</span>
                    </button>
                    <p className="background-mode-notice" role="status">
                      {notice === id ? "Coming soon" : ""}
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <h3>{item.title}</h3>
                  {view === "thumbnails" ? (
                    <div className="background-review-sizes">
                      {[64, 160, 360].map((width) => (
                        <figure key={width} style={{ width }}>
                          <img src={url} alt={item.alt} width="960" height="540" />
                          <figcaption>{width}px</figcaption>
                        </figure>
                      ))}
                    </div>
                  ) : (
                    <img src={url} alt={item.alt} width="960" height="540" />
                  )}
                </>
              )}
              <div className="background-review-meta">
                <small>backgrounds/{id}/art.svg · 960 × 540</small>
                <a href={url} download={`${id}.svg`}>
                  Download SVG
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
