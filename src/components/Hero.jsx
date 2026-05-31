import { Fragment } from "react";

/**
 * Splits `text` into words, each rising in with a staggered delay.
 * `lineBreaks` holds word indices after which a <br/> is inserted.
 */
function SplitWords({ text, baseDelay = 0, lineBreaks = [] }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span className="word">
            <span
              className="word-inner"
              style={{ animationDelay: `${baseDelay + i * 70}ms` }}
            >
              {w}
            </span>
          </span>
          {i < words.length - 1 && !lineBreaks.includes(i) && " "}
          {lineBreaks.includes(i) && <br />}
        </Fragment>
      ))}
    </>
  );
}

export default function Hero() {
  return (
    <header className="hero page" id="top">
      <div className="hero-meta parallax-slow">
        <span>
          <span className="dot" />
          Available for work
        </span>
        <span>Jakarta, Indonesia</span>
      </div>
      <h1 className="split-host">
        <SplitWords
          text="Syawadhilah Fauzi Pradipta."
          baseDelay={350}
          lineBreaks={[1]}
        />
      </h1>
      <div className="hero-sub">
        <p className="hero-bio fade-up" style={{ animationDelay: "900ms" }}>
          Software engineer and web developer with 2+ years of experience
          building scalable web applications and distributed systems.
          Specialized in React, Spring Boot, and cloud architecture.
        </p>
        <div className="hero-aside fade-up" style={{ animationDelay: "1000ms" }}>
          <span>Software Engineer</span>
          <span>Web Developer</span>
        </div>
      </div>
    </header>
  );
}
