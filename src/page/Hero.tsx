import React from "react";
import { personalInfo } from "@/data/mock";
const Hero = () => {
  return (
    <section id="home" className="hero">
        <h1> {personalInfo.name}</h1>
    </section>
    );
};

export default Hero;