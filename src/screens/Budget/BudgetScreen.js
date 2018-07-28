import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { styles } from "./styles";
import MaskedInput from "react-maskedinput";

class BudgetScreen extends Component {
    render() {
        return (
            <div>
                <nav
                    className="navbar navbar-expand-lg navbar-light navbar-shrink"
                    id="mainNav"
                >
                    <div className="container">
                        <ul className="nav nav-tabs" style={styles.tabs}>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">
                                    Orçamento
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link to="/funcionarios">
                                    <a className="nav-link" href="#">
                                        Meus Funcionários
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="container" style={styles.container}>
                    <form>
                        <div className="form-group row">
                            <label
                                for="entry"
                                className="col-sm-2 col-form-label"
                            >
                                Entrada
                            </label>
                            <div className="col-sm-10">
                                <MaskedInput
                                    mask="11:11"
                                    className="form-control"
                                    name="entry"
                                    size="5"
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label
                                for="exit"
                                className="col-sm-2 col-form-label"
                            >
                                Saída
                            </label>
                            <div className="col-sm-10">
                                <MaskedInput
                                    mask="11:11"
                                    className="form-control"
                                    name="exit"
                                    size="5"
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label
                                for="model"
                                className="col-sm-2 col-form-label"
                            >
                                Modelo
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="file"
                                    className="form-control-file"
                                    id="model"
                                />
                            </div>
                        </div>
                    </form>

                    <div>
                        <h1>Funcionários Adicionados</h1>
                        <br />
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">CEP</th>
                                    <th scope="col">-</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Fausto</td>
                                    <td>20232-112</td>
                                    <td>
                                        <button
                                            type="button"
                                            className="close"
                                            aria-label="Close"
                                        >
                                            <span aria-hidden="true">
                                                &times;
                                            </span>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Willow</td>
                                    <td>20494-203</td>
                                    <td>
                                        <button
                                            type="button"
                                            className="close"
                                            aria-label="Close"
                                        >
                                            <span aria-hidden="true">
                                                &times;
                                            </span>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Lucas</td>
                                    <td>20250-203</td>
                                    <td>
                                        <button
                                            type="button"
                                            className="close"
                                            aria-label="Close"
                                        >
                                            <span aria-hidden="true">
                                                &times;
                                            </span>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <a className="btn btn-light btn-xl">Enviar</a>
                </div>
            </div>
        );
    }
}

export default withRouter(BudgetScreen);
