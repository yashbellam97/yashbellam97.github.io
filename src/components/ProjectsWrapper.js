import React from "react";

import Wrapper from "./Wrapper";
import ProjectCard from "./ProjectCard"

import projectsData from "../projectsData"

function ProjectsWrapper() {
    const projectList = projectListGenerator();
    return (
        <div id="projects" className="projects-wrapper">
            <Wrapper className={["extended-wrapper", "carousel-container"].join(" ")}>
                <h2>My projects</h2>
                <ul className="carousel">
                    {projectList}
                </ul>
            </Wrapper>
        </div>
    );
}

function projectListGenerator() {
    return projectsData.map((project) => <ProjectCard projectDetails={project} key={project.projectId} />);
}

export default ProjectsWrapper;