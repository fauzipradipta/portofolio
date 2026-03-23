import React from "react";
import { aboutMeData } from "../data/mock";

const About = () => {
  return (
    // Removed: py-20 — padding is handled by .about-section in globals.css
    <div id="about" className="container">
      <div className="grid-container">
        <div className="text-center mb-16">
          <p className="title-big mb-4">About Me</p>
          <div className="about-bio w-full max-w-xs sm:max-w-md md:max-w-2xl mx-auto">
            <p className="text-body text-justify leading-relaxed">
              {aboutMeData.bio}
            </p>
            <p className="text-body text-justify leading-relaxed sub-bio">
              {aboutMeData.subBio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;