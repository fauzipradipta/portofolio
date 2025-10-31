import React from "react";
import { experienceData } from "../data/mock";
// import {Card,CardContent,CardTitle} from "@/components/ui/card"

const WorkExperience = () => {
    return(
        <section id="work-experience" className="py-20">
            <div className="container">
                <div className="grid-container">
                    <div className="text-center mb-16">
                        <p className="title-big mb-4">Work Experience</p>
                        <div className="experience-list">
                            <div className="grid grid-rows-1 md:grid-rows-2 lg:grid-rows-3 gap-6">
                                {experienceData.map((experience) => (
                                    <div 
                                        key={experience.id} 
                                        className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 text-left"
                                    >
                                        <h3 className="text-xl font-bold mb-2">{experience.position}</h3>
                                        <h4 className="text-lg mb-2">{experience.company}</h4>
                                        <p className="text-sm italic mb-4">{experience.duration} | {experience.location}</p>
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
            </div>
        </section>
    );
}

export default WorkExperience;