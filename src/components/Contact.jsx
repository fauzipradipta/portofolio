import SectionReorder from "./SectionReorder.jsx";

export default function Contact({ id }) {
  return (
    <section id={id} data-screen-label="Contact">
      <div className="page">
        <SectionReorder id={id} />
        <div className="section-label parallax-slow">05 — Contact</div>
        <div className="contact-wrap">
          <h2 className="contact-headline reveal">
            Let&rsquo;s build something
            <br />
            <a href="mailto:dipta0988@gmail.com">together.</a>
          </h2>
          <div className="contact-side reveal">
            <div className="row">
              <div className="label">Email</div>
              <div className="value">
                <a href="mailto:dipta0988@gmail.com">dipta0988@gmail.com</a>
              </div>
            </div>
            <div className="row">
              <div className="label">Open to</div>
              <div className="value">
                Full-time roles, contract work, and advisory.
              </div>
            </div>
            <div className="row">
              <div className="label">Elsewhere</div>
              <div className="socials">
                <a href="https://github.com/fauzipradipta" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/syawadhilah-pradipta/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
               
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Read.cv
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
