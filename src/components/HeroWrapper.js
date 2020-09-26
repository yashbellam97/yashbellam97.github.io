import React from "react";

import Wrapper from "./Wrapper"
import Header from "./Header"
import Intro from "./Intro"

function HeroWrapper() {
    return (
        <div className="hero-wrapper">
            <Wrapper className="wrapper">
                <Header />
                <Intro />
            </Wrapper>
        </div>
    );
}

export default HeroWrapper;