import React from "react";

import "./App.scss"

import HeroWrapper from "./components/HeroWrapper"
import ProjectsWrapper from "./components/ProjectsWrapper"
import SkillsWrapper from "./components/SkillsWrapper"

function App() {
    return (
        <div className="container">
            <HeroWrapper />
            <ProjectsWrapper />
            <SkillsWrapper />
        </div>
    );
}

export default App;