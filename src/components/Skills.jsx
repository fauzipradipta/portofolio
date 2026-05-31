import { SKILLS } from "../data.js";
import SectionReorder from "./SectionReorder.jsx";

export default function Skills({ id }) {
  return (
    <section id={id} data-screen-label="Skills">
      <div className="page">
        <SectionReorder id={id} />
        <div className="section-label parallax-slow">03 — Tech stack</div>
        <div className="section-head">
          <h2 className="section-title reveal">Tools and stack.</h2>
          <p className="section-subtitle reveal">
            Comfortable end-to-end. Years listed reflect continuous production
            experience.
          </p>
        </div>
        <div className="skills-grid">
          {SKILLS.map((g) => (
            <div className="skill-col reveal" key={g.title}>
              <h3>{g.title}</h3>
              <ul>
                {g.items.map(([n, y]) => (
                  <li key={n}>
                    <span>{n}</span>
                    {/* <span className="yr">{y}</span> */}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
