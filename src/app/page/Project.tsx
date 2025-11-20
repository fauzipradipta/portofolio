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
                                    <div className="p-6 text-left">
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
                                          
                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <a href={project.githubUrl} 
                                               target="_blank"
                                               rel="noopener noreferrer"
                                               className ="btn-primary !h-9 !min-h-[36px] !w-full sm:!w-[140px] flex items-center justify-center space-x-2 !py-2 !px-4 !text-xs flex-none">
                                                <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                                                    <svg 
                                                        width="14" 
                                                        height="14" 
                                                        viewBox="0 0 43 34" 
                                                        fill="currentColor" 
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="flex-shrink-0"
                                                    >
                                                        <g clipPath="url(#clip0_1449_1979)">
                                                            <path 
                                                                fillRule="evenodd" 
                                                                clipRule="evenodd" 
                                                                d="M21.4758 0C9.61044 0 0 7.6075 0 17C0 24.5225 6.14746 30.8763 14.6841 33.1287C15.7579 33.2775 16.1606 32.7675 16.1606 32.3213C16.1606 31.9175 16.1337 30.5788 16.1337 29.155C10.7379 29.9412 9.34199 28.1137 8.91247 27.1575C8.67087 26.6687 7.62392 25.16 6.7112 24.7562C5.95954 24.4375 4.88575 23.6512 6.68435 23.63C8.37558 23.6087 9.58359 24.8625 9.98626 25.3725C11.9191 27.9437 15.0062 27.2213 16.2411 26.775C16.429 25.67 16.9928 24.9262 17.6102 24.5012C12.8318 24.0763 7.83868 22.61 7.83868 16.1075C7.83868 14.2587 8.67087 12.7287 10.04 11.5387C9.82519 11.1137 9.07354 9.37125 10.2547 7.03375C10.2547 7.03375 12.0533 6.5875 16.1606 8.77625C17.8786 8.39375 19.7041 8.2025 21.5295 8.2025C23.355 8.2025 25.1804 8.39375 26.8985 8.77625C31.0057 6.56625 32.8043 7.03375 32.8043 7.03375C33.9855 9.37125 33.2339 11.1137 33.0191 11.5387C34.3882 12.7287 35.2204 14.2375 35.2204 16.1075C35.2204 22.6313 30.2004 24.0763 25.422 24.5012C26.2005 25.0325 26.8716 26.0525 26.8716 27.6462C26.8716 29.92 26.8448 31.7475 26.8448 32.3213C26.8448 32.7675 27.2475 33.2988 28.3213 33.1287C36.8042 30.8763 42.9517 24.5012 42.9517 17C42.9517 7.6075 33.3412 0 21.4758 0Z" 
                                                            />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1449_1979">
                                                                <rect width="43" height="34" fill="white"/>
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <span className="whitespace-nowrap text-xs">View Code</span>
                                            </a>
                                            {project.liveUrl && (
                                                <a href={project.liveUrl} 
                                                   target="_blank"
                                                   rel="noopener noreferrer"
                                                   className="btn-ghost flex items-center justify-center space-x-2 py-2 px-4 text-sm h-9 w-full sm:w-[140px] flex-none">
                                                    <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                                                        <ExternalLink size={14} className="flex-shrink-0" />
                                                    </div>
                                                    <span className="whitespace-nowrap text-xs">Live Demo</span>
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