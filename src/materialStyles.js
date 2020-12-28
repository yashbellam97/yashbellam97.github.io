import { makeStyles } from "@material-ui/core/styles";

const materialStyles = makeStyles((theme) => ({
    root: {
        "& a.MuiButton-root": {
            fontWeight: "bold",
            textTransform: "none",
            marginLeft: ".25em",
            marginRight: ".25em",
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
        },
    },
}));

export default materialStyles;