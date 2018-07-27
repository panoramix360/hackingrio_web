import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid, Button, Paper, withStyles, TextField } from "@material-ui/core";
import { styles } from "./styles";
import { inject, observer } from "mobx-react";

@inject("user")
@observer
class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.props.user.loadDataOnStorage();
    }

    login = () => {
        this.props.user.authenticate().then(() => {
            if (this.props.user.isAuthenticated) {
                this.props.history.push("/inicio");
            } else if (this.props.user.error) {
                console.log(this.props.user.error);
            }
        });
    };

    _handleEmailChange = e => {
        this.props.user.email = e.target.value;
    };

    _handlePasswordChange = e => {
        this.props.user.password = e.target.value;
    };

    render() {
        const { classes } = this.props;
        return (
            <Grid container className={classes.root} justify="center">
                <Grid container justify="center" alignItems="center">
                    <Paper className={classes.paper} elevation={6}>
                        <Grid
                            container
                            direction="column"
                            alignItems="center"
                            spacing={16}
                        >
                            <Grid container direction="column" spacing={8}>
                                <Grid item>
                                    <TextField
                                        value={this.props.user.email}
                                        onChange={this._handleEmailChange}
                                        fullWidth
                                        placeholder={"Usuário"}
                                        InputProps={{
                                            disableUnderline: true,
                                            classes: {
                                                root: classes.bootstrapRoot,
                                                input: classes.bootstrapInput
                                            }
                                        }}
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                    />
                                </Grid>

                                <Grid item>
                                    <TextField
                                        type="password"
                                        value={this.props.user.password}
                                        onChange={this._handlePasswordChange}
                                        fullWidth
                                        placeholder={"Senha"}
                                        InputProps={{
                                            disableUnderline: true,
                                            classes: {
                                                root: classes.bootstrapRoot,
                                                input: classes.bootstrapInput
                                            }
                                        }}
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                    />
                                </Grid>

                                <Grid item>
                                    <Link
                                        to="/"
                                        className={classes.forgotPassword}
                                    >
                                        Esqueci a senha
                                    </Link>
                                </Grid>

                                <Grid item>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        onClick={this.login}
                                    >
                                        Entrar
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid
                    container
                    className={classes.footer}
                    alignItems="flex-end"
                >
                    <p className={classes.copyright}>Copyright 2018</p>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(LoginScreen);
