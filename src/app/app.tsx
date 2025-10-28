import React from "react";
import Header from "./component/Header";
import Hero from "./component/Hero";

const App = () => {
    return(
        <div>
            <Header />
            <div className="hero-section">
               <Hero /> 
            </div>

        </div>
    );
}

export default App;