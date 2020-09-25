import React from "react";

import "./App.scss"

import HeroWrapper from "./components/HeroWrapper"
import ProjectsWrapper from "./components/ProjectsWrapper"

function App() {
    return (
        <div className="container">
            <HeroWrapper />
            <ProjectsWrapper />
        </div>
    );
}

export default App;