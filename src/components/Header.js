import React, { Component } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Badge from "@material-ui/core/Badge";
import "../css/components/Header.css";
import { withRouter } from "react-router-dom";

// First we import some modules...
class Header extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.location.pathname);
        this.isHome = this.props.location.pathname.indexOf("inicio") !== -1;
        this.isNotification =
            this.props.location.pathname.indexOf("notification") !== -1;
        this.isSemaforo =
            this.props.location.pathname.indexOf("semaforo") !== -1;
        this.isRelatorio =
            this.props.location.pathname.indexOf("relatorio") !== -1;
    }

    render() {
        return (
            <Grid container spacing={0} justify="center" className="header" style={{marginBottom: 50}}>
                <Grid item xs={12} sm={12}>
                    <Grid
                        container
                        spacing={0}
                        alignItems="center"
                        justify="center"
                    >
                        <Grid item xs={12} sm={2} className="header__logo">
                            <img
                                src={require("../img/logo.png")}
                                alt="Logo"
                                height="100"
                                width="100"
                            />
                        </Grid>
                        <Grid item xs={6} sm={2} className="header__aba">
                            <Link to="/inicio" className="header__aba-inside">
                                <img
                                    src={
                                        this.isHome
                                            ? require("../img/inicio_ativo.png")
                                            : require("../img/inicio.png")
                                    }
                                    alt="Tela Inicial"
                                    className="header__img"
                                />
                                <span
                                    className={
                                        this.isHome
                                            ? "header__texto--ativo"
                                            : ""
                                    }
                                >
                                    INÍCIO
                                </span>
                            </Link>
                        </Grid>
                        <Grid item xs={6} sm={2} className="header__aba">
                            <Link to="/semaforo" className="header__aba-inside">
                                <Badge
                                    className="header__badge"
                                    badgeContent={this.props.semaforos}
                                >
                                    <img
                                        style={{ marginRight: 5 }}
                                        className="header__img"
                                        src={
                                            this.isSemaforo
                                                ? require("../img/semaforo_ativo.png")
                                                : require("../img/semaforo.png")
                                        }
                                        alt="Tela de Semáforo"
                                    />
                                </Badge>
                                <span
                                    className={
                                        this.isSemaforo
                                            ? "header__texto--ativo"
                                            : ""
                                    }
                                >
                                    SEMÁFORO
                                </span>
                            </Link>
                        </Grid>
                        <Grid item xs={6} sm={2} className="header__aba">
                            <Link to="/" className="header__aba-inside">
                                <Badge
                                    className="header__badge"
                                    color="secondary"
                                    badgeContent={this.props.notificacoes}
                                >
                                    <img
                                        className="header__img"
                                        src={
                                            this.isNotification
                                                ? require("../img/notificacoes_ativo.png")
                                                : require("../img/notificacoes.png")
                                        }
                                        alt="Tela de Notificações"
                                    />
                                </Badge>
                                <span
                                    className={
                                        this.isNotification
                                            ? "header__texto--ativo"
                                            : ""
                                    }
                                >
                                    NOTIFICAÇÕES
                                </span>
                            </Link>
                        </Grid>
                        <Grid item xs={6} sm={2} className="header__aba">
                            <Link to="/" className="header__aba-inside">
                                <img
                                    src={
                                        this.isRelatorio
                                            ? require("../img/relatorios_ativo.png")
                                            : require("../img/relatorios.png")
                                    }
                                    alt="Tela de Relatórios"
                                    className="header__img"
                                />
                                <span
                                    className={
                                        this.isRelatorio
                                            ? "header__texto--ativo"
                                            : ""
                                    }
                                >
                                    RELATÓRIOS
                                </span>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={12}>
                    <Grid
                        container
                        spacing={0}
                        alignItems="center"
                        justify="center"
                    >
                        <Grid item xs={12} sm={2} className="header__logo" />
                        <Grid item xs={12} sm={8} className="header__aba">
                            <img
                                className="linha_menu"
                                src={require("../img/linha_menu.png")}
                                alt="Linha do Menu"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default withRouter(Header);
