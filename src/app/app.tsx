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
            <main>
                <div className="hero-section">
                 <Hero /> 
               
                </div>
                <About />

                <div className="work-experience-section">
                  <WorkExperience/>
                </div>
                
                <div className="skills-section">
                    <Skills/>
                </div>
                
                <div className="project-section">
                   <Project/> 
                </div>
                
            </main>
           <Footer/>
        </div>
    );
}

export default App;