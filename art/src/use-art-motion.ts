import { useEffect, type RefObject } from "react";

/** Pause hidden/offscreen art and honor live changes to reduced-motion preferences. */
export function useArtMotion(
  ref: RefObject<HTMLDivElement | null>,
  markup: string | undefined,
  bind: (root: Element) => (elapsed: number) => void,
  enabled: boolean,
) {
  useEffect(() => {
    const root = ref.current;
    if (!root || !markup || !enabled) return;
    const update = bind(root);
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    let visible = true;
    let frame = 0;
    let previous = 0;
    let elapsed = 0;
    const tick = (now: number) => {
      elapsed += previous ? now - previous : 0;
      previous = now;
      update(elapsed);
      frame = requestAnimationFrame(tick);
    };
    const sync = () => {
      cancelAnimationFrame(frame);
      previous = 0;
      if (preference.matches) {
        elapsed = 0;
        update(0);
      } else if (visible && !document.hidden) frame = requestAnimationFrame(tick);
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? false;
      sync();
    });
    observer.observe(root);
    preference.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    sync();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      preference.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
    };
  }, [ref, markup, bind, enabled]);
}
