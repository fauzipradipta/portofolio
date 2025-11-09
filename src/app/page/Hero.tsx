import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo, aboutData } from '../data/mock';
import ReadMoreButton from '../component/button/ReadMoreButton';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-32">
      <div className="container mt-16">
        <div className="grid-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              
              <h1 className="hero-title mb-8">
                {personalInfo.name}
              </h1>
              <p className="label mb-8 pt-8 ">Full Stack Software Engineer</p>
                
           <div className="w-full px-2 sm:px-4">
              <p className="text-sm sm:text-base md:text-lg w-full max-w-xs sm:max-w-md md:max-w-2xl mx-auto leading-relaxed break-words whitespace-normal text-justify sm:text-center">
                  {aboutData.bio}
                </p>
              </div>
              
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center space-x-2"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center space-x-2"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="btn-accent flex items-center space-x-2"
              >
                <Mail size={16} />
                <span>Get in Touch</span>
              </a>
            </div>

            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {aboutData.highlights.map((highlight, index) => (
                <div key={index} className="text-center">
                  <p className="text-body">{highlight}</p>
                </div>
              ))}
            </div> */}

            <div className='flex justify-center mt-8'>
              <ReadMoreButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;