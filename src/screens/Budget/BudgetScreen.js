import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { styles } from "./styles";
import MaskedInput from "react-maskedinput";
import Modal from 'react-responsive-modal';
import { inject, observer } from "../../../node_modules/mobx-react";

@inject('empresa')
@observer
class BudgetScreen extends Component {
    state = {
        open: false,
    };

    constructor(props) {
        super(props);
        console.log(this.props.empresa.dados)
        this.state = {
            newUser: "",
            newCep: "",
            open: false
        }
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    cadastrar = () => {
        let funcionario = { nome: this.state.newUser, cep: this.state.newZip };
        this.props.empresa.funcionarios.push(funcionario);
        this.onCloseModal();
    };

    render() {
        const { open } = this.state;
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
                                    Usuários
                                </a>
                            </li>
                            {/* <li className="nav-item">
                                <Link to="/funcionarios">
                                    <a className="nav-link" href="#">
                                        Meus Funcionários
                                    </a>
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                </nav>

                <div className="container" style={styles.container}>
                    {/* <form>
                        <div className="form-group row">
                            <label
                                for="entry"
                                className="col-sm-2 col-form-label"
                            >
                                Horário de Chegada
                            </label>
                            <div>
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
                                Horário de Saída
                            </label>
                            <div>
                                <MaskedInput
                                    mask="11:11"
                                    className="form-control"
                                    name="exit"
                                    size="5"
                                />
                            </div>
                        </div>

                        <div className="col-sm-12" align="center">
                            <button type="button" className="btn btn-primary btn-lg">Cadastrar</button>
                        </div>
                    </form>


                    <br /><br /><br />

                    <div className="form-group row">
                        <label
                            for="model"
                            className="col-sm-2 col-form-label"
                        >
                            Importar Planilha
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="file"
                                className="form-control-file"
                                id="model"
                            />
                        </div>
                    </div> */}


                    <br /><br /><br />


                    <div>
                        <h1>Usuários Cadastrados</h1>
                        <br />
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Nome</th>
                                    {/* <th scope="col">CEP</th> */}
                                    <th scope="col"></th>
                                </tr>
                            </thead>

                            <tbody>
                                {this.props.empresa.dados.funcionarios.map((f) => (
                                    <tr key={f.nome}>
                                        <td>{f.nome}</td>
                                        <td>{f.cep}</td>
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
                                ))}
                            </tbody>

                        </table>
                        <div className="col-sm-12" align="right">
                            <button type="button" class="btn btn-dark" onClick={this.onOpenModal}>+</button>
                        </div>
                    </div>

                    {/* <a className="btn btn-light btn-xl">Enviar</a> */}
                </div >


                {/* <Modal classNames={{ modal: 'custom-modal' }} open={open} onClose={this.onCloseModal} center >
                    <input
                        type="text"
                        className="form-control modal-input"
                        id="login"
                        placeholder="Usuário"
                        onChange={(value) => this.setState({ newUser: value })}
                    />
                    <input
                        type="text"
                        className="form-control modal-input"
                        id="login"
                        placeholder="CEP"
                        onChange={(value) => this.setState({ newZip: value })}
                    />
                    <a className="btn btn-light" onClick={this.cadastrar}>Cadastrar</a>
                </Modal> */}
            </div >
        );
    }

}

export default withRouter(BudgetScreen);
