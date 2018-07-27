import React, { Component } from "react";
import { Grid, Paper, Typography, withStyles } from "@material-ui/core";

const styles = theme => ({
    paper: {
        width: 300,
        height: 200,
        backgroundColor: "#fff",
        padding: 8
    },
    title_paper: {
        color: "#1C5168",
        fontSize: 24,
        textAlign: "center",
        marginTop: 16
    },
    subtitle_paper: {
        color: "#6FBEB2",
        fontSize: 56,
        textAlign: "center"
    }
});

class Card extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid item>
                <Paper className={classes.paper} elevation={4}>
                    <Typography className={classes.title_paper}>
                        {this.props.title}
                    </Typography>
                    <Typography className={classes.subtitle_paper}>
                        {this.props.subtitle}
                    </Typography>
                </Paper>
            </Grid>
        );
    }
}

export default withStyles(styles)(Card);
