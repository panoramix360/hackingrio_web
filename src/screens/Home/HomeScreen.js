import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { styles } from "./styles";
import { Link as LinkScroll, Element } from "rc-scroll-anim";
import { inject, observer } from "../../../node_modules/mobx-react";

@inject('empresa')
@observer
class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: ""
        }
    }

    submitLogin = () => {
        this.props.empresa.dados.nome = this.state.nome;
        this.props.empresa.login().then(() => {
            this.props.history.push('/orcamento');
        }, () => {
            alert('Falha no login.');
        });
    }

    render() {
        return (
            <div>
                <nav
                    className="navbar navbar-expand-lg navbar-light fixed-top navbar-shrink"
                    id="mainNav"
                >
                    <div className="container">
                        <a className="navbar-brand">Go Work</a>
                        <button
                            className="navbar-toggler navbar-toggler-right"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarResponsive"
                            aria-controls="navbarResponsive"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarResponsive"
                        >
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <form className="form-inline">
                                        <div className="form-group mb-2">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="login"
                                                placeholder="Usuário"
                                                onChange={(value) => this.setState({ nome: value.target.value })}
                                            />
                                        </div>
                                        <div className="form-group mx-sm-3 mb-2">
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="password"
                                                placeholder="Senha"
                                            />
                                        </div>
                                        <div className="form-group mb-2">
                                            <a className="nav-link" onClick={() => { this.submitLogin() }}>
                                                Entrar
                                            </a>
                                        </div>
                                    </form>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <header className="masthead text-center text-white d-flex">
                    <div className="container my-auto">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <h1 className="text-uppercase">
                                    <strong>
                                        Seu transporte privado empresarial
                                    </strong>
                                </h1>
                                <hr />
                            </div>
                            <div className="col-lg-8 mx-auto">
                                <p className="text-faded mb-5">
                                    Go Work vai ajudar seus funcionários a
                                    sairem com segurança e no horário do seu
                                    ambiente empresarial
                                </p>
                                <LinkScroll className="nav-list" to="register">
                                    <a className="btn btn-primary btn-xl">
                                        Faça seu orçamento
                                    </a>
                                </LinkScroll>
                            </div>
                        </div>
                    </div>
                </header>

                <Element className="pack-page" id="register">
                    <section className="bg-primary">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 mx-auto text-center">
                                    <h2 className="section-heading text-white">
                                        Cadastre sua empresa
                                    </h2>

                                    <hr className="light my-4" />

                                    <form>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                placeholder="Nome"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="cep"
                                                placeholder="CEP"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                placeholder="E-mail"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="password"
                                                placeholder="Senha"
                                            />
                                        </div>
                                    </form>
                                    <a className="btn btn-light btn-xl">
                                        Enviar
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </Element>
            </div>
        );
    }
}

export default withRouter(HomeScreen);
