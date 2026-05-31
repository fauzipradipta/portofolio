import { useEffect, useRef } from "react";
import { PROJECTS } from "../data.js";
import SectionReorder from "./SectionReorder.jsx";

export default function Projects({ id }) {
  const previewRef = useRef(null);
  const stateRef = useRef({ x: 0, y: 0, tx: 0, ty: 0, active: -1 });

  // Smoothly trail the cursor with the preview card.
  useEffect(() => {
    const el = previewRef.current;
    if (!el) return;
    let raf = 0;
    const tick = () => {
      const s = stateRef.current;
      s.tx += (s.x - s.tx) * 0.18;
      s.ty += (s.y - s.ty) * 0.18;
      el.style.transform = `translate3d(${s.tx}px, ${s.ty}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const onMove = (e, i) => {
    const s = stateRef.current;
    s.x = e.clientX;
    s.y = e.clientY;
    if (s.active !== i) {
      s.active = i;
      const el = previewRef.current;
      if (el) {
        const p = PROJECTS[i];
        el.style.background = p.bg;
        el.style.color = p.color;
        el.querySelector(".prev-num").textContent = String(i + 1).padStart(2, "0");
        el.querySelector(".prev-name").textContent = p.name;
        el.classList.add("on");
      }
    }
  };

  const onLeave = () => {
    stateRef.current.active = -1;
    const el = previewRef.current;
    if (el) el.classList.remove("on");
  };

  return (
    <section id={id} data-screen-label="Projects">
      <div className="page">
        <SectionReorder id={id} />
        <div className="section-label parallax-slow">02 — Selected work</div>
        <div className="section-head">
          <h2 className="section-title reveal">Selected work.</h2>
          <p className="section-subtitle reveal">
            Recent projects across full-stack and distributed systems. Most are
            currently in production.
          </p>
        </div>
        <div className="projects-list" onMouseLeave={onLeave}>
          {PROJECTS.map((p, i) => (
            <div
              className="project reveal"
              key={p.name}
              style={{ "--stagger": `${i * 90}ms` }}
              onMouseMove={(e) => onMove(e, i)}
              onMouseEnter={(e) => onMove(e, i)}
            >
              <div className="p-num">
                {String(i + 1).padStart(2, "0")} / {p.year}
              </div>
              <div className="p-name">{p.name}</div>
              <div className="p-desc">{p.desc}</div>
              <div className="p-stack">
                {p.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
              {p.link ? (
                <a
                  className="p-arrow"
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  ↗
                </a>
              ) : (
                <div className="p-arrow">↗</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="project-preview" ref={previewRef} aria-hidden="true">
        <div className="prev-num">01</div>
        <div className="prev-name">Project</div>
      </div>
    </section>
  );
}
