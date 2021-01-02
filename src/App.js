import React from "react";

import "./App.scss"

import Header from "./components/Header"
import HeroWrapper from "./components/HeroWrapper"
import ProjectsWrapper from "./components/ProjectsWrapper"
import SkillsWrapper from "./components/SkillsWrapper"
import Footer from "./components/Footer"

function App() {
    return (
        <div className="container">
            <Header />
            <HeroWrapper />
            <ProjectsWrapper />
            <SkillsWrapper />
            <Footer />
        </div>
    );
}

export default App;