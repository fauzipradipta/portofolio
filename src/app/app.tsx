import React from "react";
import Header from "./page/Header";
import Hero from "./page/Hero";
import About from "./page/About";
import WorkExperience from "./page/WorkExperience";

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
            </main>
           
        </div>
    );
}

export default App;