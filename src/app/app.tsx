import React from "react";
import Header from "./component/Header";
import Hero from "./page/Hero";
import About from "./page/About";
import WorkExperience from "./page/WorkExperience";
import Skills from "./page/Skills";
import Project from "./page/Project";
import Footer from "./component/Footer";

const App = () => {
    return(
        <div>
            <Header />

            <div>

              <main>
                <div className="hero-section">
                  <Hero /> 
                </div>
                
                <div className="about-section">
                  <About /> 
                </div>
                
                <div className="work-experience-section">
                  <WorkExperience/>
                </div>
                
                <div className="skills-section">
                    <Skills/>
                </div>
                
                <div className="project-section">
                  <Project/> 
                </div>
                <div className="footer-section">
                  <Footer/>  
                </div>
                  
              </main>
            </div>
            
           
        </div>
    );
}

export default App;