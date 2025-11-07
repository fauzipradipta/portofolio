"use client"
import React from "react";
import { Download } from "lucide-react";
import { personalInfo } from "../data/mock";
import ThemeToggle from "../page/ThemeToggle";
// import "../index.css";

const Header = () => {
    const scrollToSection = (sectionId:string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Mock download functionality
    const link = document.createElement('a');
    link.href = personalInfo.resumeUrl;
    link.download = 'Alex_Thompson_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
    return(
     <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border-light">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <div className="header-logo">
            SFP
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="nav-link">
              About
            </button>
            <button onClick={() => scrollToSection('work-experience')} className="nav-link">
              Experience
            </button>
            <button onClick={() => scrollToSection('project')} className="nav-link">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={downloadResume}
              className="btn-primary hidden sm:flex items-center space-x-2"
            >
              <Download size={14} />
              <span>Resume</span>
            </button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
    )
}
export default Header