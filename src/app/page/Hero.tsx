import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo, aboutData } from '../data/mock';
import ReadMoreButton from '../component/button/ReadMoreButton';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-65">
      <div className="container">
        <div className="flex justify-center">
          <div className="max-w-4xl mx-auto text-center w-full px-4">
            
            <h1 className="hero-title mb-4">
              {personalInfo.name}
            </h1>
            
            
            <p className="label mb-8 text-lg md:text-xl">
              FULL STACK SOFTWARE ENGINEER
            </p>
            
            
            <div className="mb-12">
              <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                {aboutData.bio}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center space-x-2 w-full sm:w-auto px-6 py-3"
              >
                <Github size={16} />
                <span>GITHUB</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center space-x-2 w-full sm:w-auto px-6 py-3"
              >
                <Linkedin size={16} />
                <span>LINKEDIN</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="btn-accent flex items-center justify-center space-x-2 w-full sm:w-auto px-6 py-3"
              >
                <Mail size={16} />
                <span>GET IN TOUCH</span>
              </a>
            </div>
            <div className='flex justify-center'>
              <ReadMoreButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;