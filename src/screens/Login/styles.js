export const styles = theme => ({
    root: {
        flexGrow: 1,
        height: "100%",
        position: "absolute"
    },
    paper: {
        width: 450,
        backgroundColor: "#efefef",
        padding: 32
    },
    bootstrapRoot: {
        padding: 0,
        "label + &": {
            marginTop: theme.spacing.unit * 3
        }
    },
    bootstrapInput: {
        borderRadius: 4,
        backgroundColor: theme.palette.common.white,
        border: "1px solid #ced4da",
        fontSize: 16,
        padding: "10px 12px",
        width: "calc(100% - 24px)",
        transition: theme.transitions.create(["border-color", "box-shadow"]),
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
        ].join(","),
        "&:focus": {
            borderColor: "#80bdff",
            boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
        }
    },
    forgotPassword: {
        float: "right",
        textDecoration: "none",
        color: "#A09E9E"
    },
    copyright: {
        color: "#1B4F68"
    },
    footer: {
        marginLeft: 32
    }
});
