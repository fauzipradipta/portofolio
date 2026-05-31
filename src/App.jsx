import { useCallback, useEffect, useState } from "react";

import { DEFAULT_ORDER } from "./data.js";
import { useReveal, useParallax, usePersistentState } from "./hooks.js";

import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import LoadCurtain from "./components/LoadCurtain.jsx";
import Controls from "./components/Controls.jsx";
import { ReorderCtx } from "./components/SectionReorder.jsx";

const SECTION_MAP = {
  about: About,
  projects: Projects,
  skills: Skills,
  experience: Experience,
  contact: Contact,
};

export default function App() {
  const [theme, setTheme] = usePersistentState("pf.theme", "light");
  const [density, setDensity] = usePersistentState("pf.density", "cozy");
  const [order, setOrder] = usePersistentState("pf.order", DEFAULT_ORDER);
  const [panelOpen, setPanelOpen] = useState(false);

  // Reflect theme / density / panel state onto <body> so the CSS tokens switch.
  useEffect(() => {
    document.body.className = [
      theme === "dark" ? "theme-dark" : "theme-light",
      `density-${density}`,
      panelOpen ? "show-reorder" : "",
    ]
      .filter(Boolean)
      .join(" ");
  }, [theme, density, panelOpen]);

  useReveal();
  useParallax();

  const safeOrder = Array.isArray(order) ? order : DEFAULT_ORDER;

  const move = useCallback(
    (id, dir) => {
      setOrder((prev) => {
        const cur = Array.isArray(prev) ? prev.slice() : DEFAULT_ORDER.slice();
        const i = cur.indexOf(id);
        const j = i + dir;
        if (i < 0 || j < 0 || j >= cur.length) return prev;
        [cur[i], cur[j]] = [cur[j], cur[i]];
        return cur;
      });
    },
    [setOrder]
  );

  const resetOrder = () => setOrder(DEFAULT_ORDER);

  return (
    <ReorderCtx.Provider value={{ move }}>
      <LoadCurtain />
      <Nav order={safeOrder} />
      <Hero />
      {safeOrder.map((key) => {
        const C = SECTION_MAP[key];
        return C ? <C key={key} id={key} /> : null;
      })}
      <footer className="page">
        <span>© 2026 — Syawadhilah Fauzi Pradipta</span>
        <span>Built with care in Jakarta</span>
        <span>Last updated · May 2026</span>
      </footer>

      <Controls
        open={panelOpen}
        setOpen={setPanelOpen}
        theme={theme}
        setTheme={setTheme}
        density={density}
        setDensity={setDensity}
        order={safeOrder}
        move={move}
        resetOrder={resetOrder}
      />
    </ReorderCtx.Provider>
  );
}
