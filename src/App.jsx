import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Header from './Component/Header'
import Hero from './Pages/Hero'
import About from './Pages/About'
import WorkExperience from './Pages/WorkExperience'
import Skills from './Pages/Skills'
import Project from './Pages/Project'
import Footer from './Component/Footer'
import './App.css'

function App() {
 

  return (
    <div className="app-wrapper">
            <Header />
            <main className="main-content  ">
                <section id="hero" className="hero-section">
                    <Hero />
                </section>

                <section id="about" className="about-section">
                    <About />
                </section>

                <section id="experience" className="work-experience-section">
                    <WorkExperience />
                </section>

                <section id="skills" className="skills-section">
                    <Skills />
                </section>

                <section id="projects" className="project-section">
                    <Project />
                </section> 
            </main>

            <footer className="footer-section">
                <Footer />
            </footer>
        </div>
  )
}

export default App
