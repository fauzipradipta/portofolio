import React from "react";
import { aboutMeData, skillsData } from "../data/mock";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <div className="grid-container">
          <div className="text-center mb-16">
            <p className=" title-big mb-4">About Me</p>
            <div className="about-bio">
              <p className="text-regular text-justify leading-relaxed ">
                {aboutMeData.bio}              
              </p>
              <p className="text-regular text-justify leading-relaxed sub-bio about-bio">
                {aboutMeData.subBio}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;