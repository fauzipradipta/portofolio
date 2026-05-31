import { useEffect, useState } from "react";

/**
 * Reveal-on-scroll. Adds the `in` class to `.reveal` elements as they enter the
 * viewport, with a few layers of fallback so content is never stuck hidden.
 */
export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".reveal:not(.in)"));
    if (!els.length) return;

    const revealIfVisible = (el) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.95) el.classList.add("in");
    };
    els.forEach(revealIfVisible);

    let io;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0, rootMargin: "0px 0px -5% 0px" }
      );
      els.forEach((el) => {
        if (!el.classList.contains("in")) io.observe(el);
      });
    }

    const fallback = setTimeout(() => {
      document
        .querySelectorAll(".reveal:not(.in)")
        .forEach((el) => el.classList.add("in"));
    }, 1200);

    const onScroll = () => {
      document.querySelectorAll(".reveal:not(.in)").forEach(revealIfVisible);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      io && io.disconnect();
      clearTimeout(fallback);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
}

/**
 * Gentle scroll parallax on any `.parallax-slow` element.
 */
export function useParallax() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    let raf = 0;
    const apply = () => {
      raf = 0;
      const els = document.querySelectorAll(".parallax-slow");
      const vh = window.innerHeight;
      els.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) return;
        const center = r.top + r.height / 2 - vh / 2;
        const offset = Math.max(-40, Math.min(40, center * -0.06));
        el.style.transform = `translate3d(0, ${offset}px, 0)`;
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", apply);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", apply);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
}

/**
 * localStorage-backed state. Drop-in for simple persisted settings
 * (theme / density / section order).
 */
export function usePersistentState(key, initial) {
  const [value, setValue] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw != null ? JSON.parse(raw) : initial;
    } catch {
      return initial;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* ignore quota / privacy-mode errors */
    }
  }, [key, value]);

  return [value, setValue];
}
