import androidLogo from "./images/logos/android-logo.svg";
import cssLogo from "./images/logos/css-logo.svg";
import elixirLogo from "./images/logos/elixir-logo.svg";
import firebaseLogo from "./images/logos/firebase-logo.svg";
import htmlLogo from "./images/logos/html-logo.svg";
import javaLogo from "./images/logos/java-logo.svg";
import javascriptLogo from "./images/logos/javascript-logo.svg";
import mapsLogo from "./images/logos/maps-logo.svg";
import materialUILogo from "./images/logos/material-ui-logo.svg";
import phoenixLogo from "./images/logos/phoenix-logo.svg";
import postgresLogo from "./images/logos/postgres-logo.svg";
import reactLogo from "./images/logos/react-logo.svg";
import yCombinatorLogo from "./images/logos/y-combinator-logo.svg";

const projectsData = [
    {
        projectId: 0,
        technologies: [
            {
                technologyName: "Java",
                technologyLogo: javaLogo
            },
            {
                technologyName: "Android",
                technologyLogo: androidLogo
            },
            {
                technologyName: "Firebase",
                technologyLogo: firebaseLogo
            },
            {
                technologyName: "Google Places API",
                technologyLogo: mapsLogo
            }
        ],
        projectName: "CongreGator",
        projectDescription: "An Android app which helps people walk safely at night by assigning walking partners.",
        urls: {
            githubUrl: "https://github.com/yashbellam97/CongreGator"
        }
    },
    {
        projectId: 1,
        technologies: [
            {
                technologyName: "React",
                technologyLogo: reactLogo
            },
            {
                technologyName: "HTML",
                technologyLogo: htmlLogo
            },
            {
                technologyName: "CSS",
                technologyLogo: cssLogo
            },
            {
                technologyName: "JavaScript",
                technologyLogo: javascriptLogo
            },
            {
                technologyName: "Material-UI",
                technologyLogo: materialUILogo
            }
        ],
        projectName: "Personal Library",
        projectDescription: "A web app which helps users keep track of their reading by adding and deleting books.",
        urls: {
            liveUrl: "https://yashbellam97.github.io/Personal-Library/",
            githubUrl: "https://github.com/yashbellam97/Personal-Library"
        }
    },
    {
        projectId: 2,
        technologies: [
            {
                technologyName: "Java",
                technologyLogo: javaLogo
            },
            {
                technologyName: "Android",
                technologyLogo: androidLogo
            },
            {
                technologyName: "Hacker News API",
                technologyLogo: yCombinatorLogo
            }
        ],
        projectName: "YAHNA",
        projectDescription: "Yet Another Hacker News App with infinite scroll to read news articles right on your phone.",
        urls: {
            githubUrl: "https://github.com/yashbellam97/YAHNA"
        }
    },
    {
        projectId: 3,
        technologies: [
            {
                technologyName: "Elixir",
                technologyLogo: elixirLogo
            },
            {
                technologyName: "Phoenix Framework",
                technologyLogo: phoenixLogo
            },
            {
                technologyName: "PostgreSQL",
                technologyLogo: postgresLogo
            },
            {
                technologyName: "HTML",
                technologyLogo: htmlLogo
            },
            {
                technologyName: "CSS",
                technologyLogo: cssLogo
            },
            {
                technologyName: "JavaScript",
                technologyLogo: javascriptLogo
            }
        ],
        projectName: "Twitter Clone",
        projectDescription: "A full-stack web app that allows users to register, tweet, follow, mention, and use hashtags.",
        urls: {
            githubUrl: "https://github.com/yashbellam97/Twitter-Clone"
        }
    },
    {
        projectId: 4,
        technologies: [
            {
                technologyName: "HTML",
                technologyLogo: htmlLogo
            },
            {
                technologyName: "CSS",
                technologyLogo: cssLogo
            },
            {
                technologyName: "JavaScript",
                technologyLogo: javascriptLogo
            }
        ],
        projectName: "Etch-a-Sketch",
        projectDescription: "A digital Etch-a-Sketch pad that allows users to write by tracing the path with their cursor.",
        urls: {
            liveUrl: "https://yashbellam97.github.io/etch-a-sketch/",
            githubUrl: "https://github.com/yashbellam97/etch-a-sketch"
        }
    }
]

export default projectsData;