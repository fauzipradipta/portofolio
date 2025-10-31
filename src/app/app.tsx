import React from "react";
import Header from "./component/Header";
import Hero from "./component/Hero";
import About from "./component/About";
import WorkExperience from "./component/WorkExperience";

const App = () => {
    return(
        <div>
            <Header />
            <div className="hero-section">
               <Hero /> 
               
            </div>
            <About />
            <WorkExperience/>
        </div>
    );
}

export default App;