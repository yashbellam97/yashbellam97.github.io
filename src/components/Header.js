import React from "react";

import logo from "../images/yb-logo.svg"

function Header() {
    return (
        <header>
            <a href="#" className="logo">
                <img id="yb-logo" src={logo} alt="YB logo" />
            </a>
            <nav>
                <ul>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#">Resume</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;