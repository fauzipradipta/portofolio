import React from "react";
import Header from "./component/Header";
import Hero from "./page/Hero";
import About from "./page/About";
import WorkExperience from "./page/WorkExperience";
import Skills from "./page/Skills";

const App = () => {
    return(
        <div>
            <Header />
            <main>
                <div className="hero-section">
                 <Hero /> 
               
                </div>
                <About />
                <WorkExperience/>
                <Skills/>
            </main>
           
        </div>
    );
}

export default App;