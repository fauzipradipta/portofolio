import SectionReorder from "./SectionReorder.jsx";
import portrait from "../portfolio-portrait.png";

export default function About({ id }) {
  return (
    <section id={id} data-screen-label="About">
      <div className="page">
        <SectionReorder id={id} />
        <div className="section-label parallax-slow">01 — About</div>
        <div className="about-grid">
          <div className="about-portrait reveal">
            <img
              src={portrait}
              alt="Portfolio portrait"
              className="about-portrait-image"
            />
          </div>
          <div className="about-copy">
            <h2 className="reveal">
              I build software that is clear, fast, and considered — from the
              database to the interface.
            </h2>
            <p className="reveal">
              My work sits at the intersection of systems and interface design:
              payments infrastructure that merchants can actually understand,
              internal tools that engineers reach for, and design systems that
              hold up in production.
            </p>
            <p className="reveal">
              I care about performance budgets and developer experience in equal
              measure. The goal is always the same: make it clear, make it fast,
              and make it maintainable for whoever inherits it.
            </p>
            <div className="about-stats reveal">
              <div>
                <div className="n">2+</div>
                <div className="l">Years shipping</div>
              </div>
              <div>
                <div className="n">14</div>
                <div className="l">Production systems</div>
              </div>
              <div>
                <div className="n">4</div>
                <div className="l">Open-source releases</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
