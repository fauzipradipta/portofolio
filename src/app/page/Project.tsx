import React from 'react';
import { projectsData } from '../data/mock';
const Project = () => {
    return(
        <section id="project" className="py-20">
            <div className="container">
                <div className="grid-container">
                    <div className="text-center mb-16">
                        <p className="title-big mb-4">Project</p>                                                    
                            {projectsData.map((projects)=>(
                                <div key={projects.id} className="p-6 border border-gray-200 rounded-lg shadow-sm card-project dark:border-gray-700 text-left">
                                    <h3 className="text-xl font-bold mb-2">{projects.name}</h3>
                                    <p className="text-lg mb-2">{projects.description}</p>
                                    <a href={projects.liveUrl} className="text-blue-500 hover:underline">View Project</a>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Project;