import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { styles } from "./styles";

const ContainerPaper = ({ children }) => {
    return (
        <Grid item xs={10} style={styles.container}>
            <Paper elevation={4} style={styles.paper}>
                <Grid container justify="center">
                    <Grid item xs={11} style={styles.inner_container}>
                        {children}
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default ContainerPaper;
