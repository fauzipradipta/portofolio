import React from "react";
import Header from "./component/Header";
import Hero from "./component/Hero";
import About from "./component/About";
import WorkExperience from "./component/WorkExperience";

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