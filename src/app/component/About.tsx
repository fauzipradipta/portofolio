import React from "react";
import { aboutMeData, skillsData } from "../data/mock";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <div className="grid-container">
          <div className="text-center mb-16">
            <p className="label mb-4">About Me</p>
            {/* <h2 className="title-big mb-8">Building Digital Solutions</h2> */}
            <p className="text-regular text-justify leading-relaxed">
              {aboutMeData.bio}
              
            </p>
            <p className="text-regular text-justify leading-relaxed sub-bio">
              {aboutMeData.subBio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;