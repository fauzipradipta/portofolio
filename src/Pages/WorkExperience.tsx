import React from "react";
import { experienceData, pageTitles } from "../data/mock";

const WorkExperience = () => {
  return (
    // Removed: py-20 — padding is handled by .work-experience-section in globals.css
    <div id="work-experience" className="container">
      {/* Removed grid-container — adds ~95px padding on all sides via calc(var(--grid-unit) * 2) */}
      <div className="text-center mb-16">
        <p className="title-big mb-4">{pageTitles.experience}</p>
        <div className="experience-list">
          {/* Fixed: grid-rows-* creates fixed empty row slots. Use flex col instead. */}
          <div className="flex flex-col gap-6">
            {experienceData.map((experience) => (
              <div
                key={experience.id}
                className="p-6 border border-gray-200 rounded-lg shadow-sm card dark:border-gray-700 text-left"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">{experience.position}</h3>
                  <p className="text-sm italic">{experience.duration}</p>
                </div>
                <h3 className="text-lg mb-2">{experience.company}</h3>
                <p className="text-lg mb-2">{experience.location}</p>
                <p className="text-regular mb-4">{experience.description}</p>
                <ul className="list-disc list-inside space-y-2">
                  {experience.achievements.map((achievement, index) => (
                    <li key={index} className="text-regular">{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;