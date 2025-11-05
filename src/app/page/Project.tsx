import React from 'react';
import { projectsData } from '../data/mock';
import Image from 'next/image';
import { Github } from 'lucide-react';
const Project = () => {
    return(
        <section id="project" className="py-20">
            <div className="container">
                <div className="grid-container">
                    <div className="text-center mb-16">
                        <p className="title-big mb-4">Project</p>                                                    
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {projectsData.map((project) => (
                                <div key={project.id} 
                                    className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                                        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                                          <div className="flex gap-3">
                                            <a href={project.githubUrl} 
                                               className="inline-flex items-center px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-md text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                                <Github size={16} className="mr-2"/>
                                                View Github
                                            </a>
                                            <a href={project.liveUrl} 
                                               className="inline-flex items-center px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-md text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                                <svg width="16" height="12" viewBox="0 0 31 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20.707 4.52148L20.6924 5.52148L1 5.25V26.7539H20.5547V11.4307H21.5547V27.75H21.2676V27.7539H0V4.95898H0.291992L0.302734 4.24023L20.707 4.52148ZM29.9043 1.5459L30.373 1.63477L30.2832 2.1416L30.166 2.79883L30.2363 2.90723L30.1318 2.98535L28.8604 10.1318L28.3867 10.0469L27.9141 9.96191L29.002 3.84766L14.2402 15.1133L13.6953 14.2734L29.1738 2.46289L21.4824 1.02051L21.6719 0L29.9043 1.5459Z" fill="black"/>
                                                </svg>
                                                View Demo
                                            </a>
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