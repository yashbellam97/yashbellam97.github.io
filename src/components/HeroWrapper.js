import React from "react";

import Wrapper from "./Wrapper"
import Intro from "./Intro"

function HeroWrapper() {
    return (
        <div className="hero-wrapper">
            <Wrapper className="wrapper">
                <Intro />
            </Wrapper>
        </div>
    );
}

export default HeroWrapper;