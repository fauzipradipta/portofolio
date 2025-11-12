import React from 'react';
import { pageTitles, skillsData } from '../data/mock';

const Skills = () => {
    return(
        <section id="skills" className="py-20">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {/* Technical Skills */}
                    <div className="text-left">
                        <p className="title-big mb-3">{pageTitles.skills}</p>
                        {skillsData.technical.map((techCategory) => (
                            <div key={techCategory.category} className="mb-2 py-2 px-3 border border-gray-200 rounded-lg shadow-sm card-skill dark:border-gray-700">
                                <h3 className="text-body font-semibold mb-1.5">{techCategory.category}</h3>
                                <div className="flex flex-wrap gap-1">
                                    {techCategory.skills.map((skill, index) => (
                                        <span 
                                            key={index} 
                                            className="px-2 py-0.5 text-body border border-gray-200 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    
                    <div className="flex flex-col items-center md:items-end lg:col-span-1">
                        <p className="title-big mb-6 text-center md:text-right w-full">{pageTitles.competencies}</p>
                        <div className="card-skill-core w-full max-w-xs">
                            <div className="flex flex-col items-center gap-5">                       
                                {skillsData.soft.map((skill, index) => (
                                    <div 
                                        key={index} 
                                        className="flex items-center gap-4 w-full"
                                    >
                                        <div className="flex-shrink-0 w-4 h-4 border-2 border-gray-300 dark:border-gray-600 rounded-full"></div>
                                        <span className="text-body font-medium text-center flex-1">
                                            {skill}
                                        </span>   
                                    </div>
                                ))}
                            </div>                        
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;