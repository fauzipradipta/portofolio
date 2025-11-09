import React from "react";
import { aboutMeData, skillsData } from "../data/mock";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <div className="grid-container">
          <div className="text-center mb-16">
            <p className=" title-big mb-4">About Me</p>
            <div className="about-bio w-full px-2 sm:px-4">
              <p className="text-body text-justify leading- sm:text-base md:text-lg w-full max-w-xs sm:max-w-md md:max-w-2xl mx-auto leading-relaxed break-words whitespace-normal text-justify sm:text-center ">
                {aboutMeData.bio}              
              </p>
              <p className="text-body text-justify leading-relaxed sub-bio about-bio sm:text-base md:text-lg w-full max-w-xs sm:max-w-md md:max-w-2xl mx-auto leading-relaxed break-words whitespace-normal text-justify sm:text-center">
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