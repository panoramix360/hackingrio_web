import { action, observable, computed } from "mobx";
import EmpresaService from '../services/empresaService';
import { promises } from "fs";

export default class EmpresaStore {
    key_empresa = 'empresa';

    @observable dados = {
        idEmpresa: undefined,
        nome: undefined,
        latitude: undefined,
        longitude: undefined,
        funcionarios: [],
        createdAt: undefined,
        updatedAt: undefined
    };

    @action
    async login() {
        await EmpresaService.getEmpresa(this.dados.nome)
            .then(
                (response) => {
                    if (response) {
                        this.dados.funcionarios = response[0].funcionario;
                    }
                    else {
                        Promise.reject();
                    }
                },
                (error) => {
                    console.log(error);
                    this.error = error;
                }
            )
    }
}