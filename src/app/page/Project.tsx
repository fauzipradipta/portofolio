import React from 'react';
import { pageTitles, projectsData } from '../data/mock';
import { Github, Moon, Sun } from 'lucide-react';

const Project = () => {
    return(
        <section id="project" className="py-20 project-section">
            <div className="container">
                

                <div className="grid-container">
                    <div className="text-center mb-16">
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
                                          
                                        <div className="flex gap-3">
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
                                                    <svg width="16" height="12" viewBox="0 0 31 28" fill="none">
                                                        <path 
                                                            d="M20.707 4.52148L20.6924 5.52148L1 5.25V26.7539H20.5547V11.4307H21.5547V27.75H21.2676V27.7539H0V4.95898H0.291992L0.302734 4.24023L20.707 4.52148ZM29.9043 1.5459L30.373 1.63477L30.2832 2.1416L30.166 2.79883L30.2363 2.90723L30.1318 2.98535L28.8604 10.1318L28.3867 10.0469L27.9141 9.96191L29.002 3.84766L14.2402 15.1133L13.6953 14.2734L29.1738 2.46289L21.4824 1.02051L21.6719 0L29.9043 1.5459Z" 
                                                            fill="currentColor"
                                                        />
                                                    </svg>
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