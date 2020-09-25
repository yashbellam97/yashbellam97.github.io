import React from "react";

import Wrapper from "./Wrapper"
import Header from "./Header"

function HeroWrapper() {
    return (
        <div className="hero-wrapper">
            <Wrapper>
                <Header />
            </Wrapper>
        </div>
    );
}

export default HeroWrapper;