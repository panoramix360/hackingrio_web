import { Grid, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Card from "../../components/Card";
import Header from "../../components/Header";
import { styles } from "./styles";

class HomeScreen extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid container className={classes.root}>
                <Header semaforos={3} notificacoes={5} />

                <Grid item xs={12} sm={12} className={classes.container}>
                    <Grid container justify="center" spacing={32}>
                        <Card title="Testando" subtitle="" />
                        <Card title="Testando" subtitle="" />
                        <Card title="Testando" subtitle="" />
                    </Grid>
                    <Grid container justify="center" spacing={32}>
                        <Card title="Testando" subtitle="" />
                        <Card title="Testando" subtitle="" />
                        <Card title="Testando" subtitle="" />
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(withRouter(HomeScreen));
