import React from "react";

import Wrapper from "./Wrapper";

import arrow from "../images/arrow-icon.svg"

function ProjectsWrapper() {
    return (
        <div className="projects-wrapper">
            <Wrapper className={["extended-wrapper", "carousel-container"].join(" ")}>
                <img src={arrow} id="left-arrow" className="arrow" alt="Move project cards to the right"/>
                <img src={arrow} id="right-arrow" className="arrow" alt="Move project cards to the left"/>
            </Wrapper>
        </div>
    );
}

export default ProjectsWrapper;