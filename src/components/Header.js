import React from "react";

import { ThemeProvider } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

import { darkTheme } from "../materialThemes";
import materialStyles from "../materialStyles";

import logo from "../images/yb-logo.svg"

function Header() {
    const classes = materialStyles();

    return (
        <header>
            <a href="#" className="logo">
                <img id="yb-logo" src={logo} alt="YB logo" />
            </a>
            <nav className={classes.root}>
                <ThemeProvider theme={darkTheme}>
                    <Button href="#projects" size="small">Projects</Button>
                    <Button href={process.env.PUBLIC_URL + '/Yaswanth_Bellam_Resume.pdf'} target="_blank" variant="contained" size="small" color="primary">Resume</Button>
                </ThemeProvider>
            </nav>
        </header>
    );
}

export default Header;