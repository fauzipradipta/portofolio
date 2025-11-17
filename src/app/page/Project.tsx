import React from 'react';
import { pageTitles, projectsData } from '../data/mock';
import { Github, ExternalLink } from 'lucide-react';

const Project = () => {
    return(
        <section id="project" className="py-20 project-section">
            <div className="container">
                <div className="grid-container">
                    <div className="text-left mb-16">
                        <p className="title-big mb-4">{pageTitles.projects}</p>                                                    
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {projectsData.map((project) => (
                                <div key={project.id} 
                                    className="card-project group hover:transform hover:scale-102 transition-all duration-200">
                                    <div className="p-6">
                                        <h3 className="text-regular mb-2">{project.name}</h3>
                                        <p className="text-sm mb-4">{project.description}</p>
                                        
                                        {/* Technologies */}
                                        {project.technologies && (
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.technologies.map((tech, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-2 py-1 bg-background text-body border border-border-light text-xs"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                          
                                        <div className="flex flex-col sm:flex-row gap-3 ">
                                            <a href={project.githubUrl} 
                                               target="_blank"
                                               rel="noopener noreferrer"
                                               className="btn-primary flex items-center space-x-2">
                                                <Github size={16} />
                                                <span>View Code</span>
                                            </a>
                                            {project.liveUrl && (
                                                <a href={project.liveUrl} 
                                                   target="_blank"
                                                   rel="noopener noreferrer"
                                                   className="btn-ghost flex items-center space-x-2">
                                                    <ExternalLink size={16}/>
                                                    <span>Live Demo</span>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Project;