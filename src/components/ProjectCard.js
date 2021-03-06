import React from "react";

import Tooltip from '@material-ui/core/Tooltip';

import gitHubLogo from "../images/logos/github-logo.svg"
import globeLogo from "../images/logos/globe-logo.svg"

function ProjectCard(props) {
    const technologyList = props.projectDetails.technologies.map((technology) =>
        <li key={technology.technologyName}>
            <Tooltip title={technology.technologyName} placement="top" arrow>
                <img src={technology.technologyLogo} alt={technology.technologyName + " logo"} />
            </Tooltip>
        </li>
    );

    let urlList = [];
    if ("liveUrl" in props.projectDetails.urls) {
        urlList.push(
            <li key="website">
                <Tooltip title="Visit website" placement="bottom" arrow>
                    <a href={props.projectDetails.urls.liveUrl}>
                        <img src={globeLogo} alt="Project website logo" />
                    </a>
                </Tooltip>
            </li>
        );
    }

    if ("githubUrl" in props.projectDetails.urls) {
        urlList.push(
            <li key="github">
                <Tooltip title="Visit GitHub" placement="bottom" arrow>
                    <a href={props.projectDetails.urls.githubUrl}>
                        <img src={gitHubLogo} alt="Project GitHub logo" />
                    </a>
                </Tooltip>
            </li>
        );
    }

    return (
        <div className="project-card">
            <div className="project-title">
                <ul>
                    {technologyList}
                </ul>
                <h3>{props.projectDetails.projectName}</h3>
            </div>
            <div className="project-details">
                <p>{props.projectDetails.projectDescription}</p>
                <ul>
                    {urlList}
                </ul>
            </div>
        </div>
    );
}

export default ProjectCard;