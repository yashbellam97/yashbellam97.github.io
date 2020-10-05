import React from "react";

import Wrapper from "./Wrapper";

import skillsData from "../skillsData";

function SkillsWrapper() {
    const skillList = skillListGenerator();
    return (
        <div className="skills-wrapper">
            <Wrapper className="wrapper">
                <h2>Skills</h2>
                <ul className="skills">
                    {skillList}
                </ul>
            </Wrapper>
        </div>
    );
}

function skillListGenerator() {
    return skillsData.map((skill) => <li><img src={skill.skillLogo} alt={skill.skillName + " logo"} /></li>);
}

export default SkillsWrapper;