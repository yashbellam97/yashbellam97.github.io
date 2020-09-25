import React from "react";

import Wrapper from "./Wrapper"
import Header from "./Header"
import Intro from "./Intro"

function HeroWrapper() {
    return (
        <div className="hero-wrapper">
            <Wrapper>
                <Header />
                <Intro />
            </Wrapper>
        </div>
    );
}

export default HeroWrapper;