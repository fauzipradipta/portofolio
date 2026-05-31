import { EXPERIENCE } from "../data.js";
import SectionReorder from "./SectionReorder.jsx";

export default function Experience({ id }) {
  return (
    <section id={id} data-screen-label="Experience">
      <div className="page">
        <SectionReorder id={id} />
        <div className="section-label parallax-slow">04 — Experience</div>
        <div className="section-head">
          <h2 className="section-title reveal">Experience.</h2>
          <p className="section-subtitle reveal">
            Most recent first. Happy to walk through any of these in detail.
          </p>
        </div>
        <div className="exp-list">
          {EXPERIENCE.map((e) => (
            <div className="exp-row reveal" key={e.role + e.when}>
              <div className="exp-when">{e.when}</div>
              <div className="exp-main">
                <h4>{e.role}</h4>
                <div className="where">{e.where}</div>
                <p>{e.desc}</p>
              </div>
              <div className="exp-tags">
                {e.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <a
          className="resume-cta reveal"
          href="#"
          onClick={(e) => e.preventDefault()}
        >
          Download résumé · PDF <span className="arr">↓</span>
        </a>
      </div>
    </section>
  );
}
