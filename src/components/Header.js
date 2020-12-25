import React from "react";

import logo from "../images/yb-logo.svg"

function Header() {
    return (
        <header>
            <a href="#" className="logo">
                <img src={logo} alt="YB logo"/>
            </a>
            <nav>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;