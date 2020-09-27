import React from "react";

import Wrapper from "./Wrapper";
import ProjectCard from "./ProjectCard"

import arrow from "../images/arrow-icon.svg"

import projectsData from "../projectsData"

function ProjectsWrapper() {
    const projectList = projectListGenerator();
    return (
        <div className="projects-wrapper">
            <Wrapper className={["extended-wrapper", "carousel-container"].join(" ")}>
                <img src={arrow} id="left-arrow" className="arrow" alt="Move project cards to the right"/>
                <ul className="carousel">
                    {projectList}
                </ul>
                <img src={arrow} id="right-arrow" className="arrow" alt="Move project cards to the left"/>
            </Wrapper>
        </div>
    );
}

function projectListGenerator() {
    return projectsData.map((project) => <ProjectCard projectDetails={project} key={project.projectId} />);
}

export default ProjectsWrapper;