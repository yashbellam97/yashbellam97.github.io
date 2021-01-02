import React from "react";

import linkedInLogo from "../images/logos/linkedin-logo.svg";
import gitHubLogo from "../images/logos/github-logo.svg";

function Footer() {
    return (
        <footer>
            <p>&copy; Yaswanth Bellam</p>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/yashbellam97/">
                        <img id="linkedin-logo" src={linkedInLogo} alt="LinkedIn logo" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/yashbellam97">
                        <img id="github-logo" src={gitHubLogo} alt="GitHub logo" />
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;