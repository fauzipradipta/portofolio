import React from "react";
import { experienceData } from "../data/mock";

const WorkExperience = () => {
    return(
        <section id="work-experience" className="py-20">
            <div className="container">
                <div className="grid-container">
                    <div className="text-center mb-16">
                        <p className="title-big mb-4">Work Experience</p>
                        <div className="experience-list">
                            {experienceData.map((experience) => (
                                <div key={experience.id} className="experience-item mb-12 text-left">
                                    <h3 className="text-xl font-bold">{experience.position} - {experience.company}</h3>     
                                    <p className="text-sm italic mb-2">{experience.duration} | {experience.location}</p>
                                    <p className="text-regular mb-2">{experience.description}</p>
                                    <ul className="list-disc list-inside">
                                        {experience.achievements.map((achievement, index) => (
                                            <li key={index} className="text-regular mb-1">{achievement}</li>
                                        ))}
                                    </ul>   
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WorkExperience;