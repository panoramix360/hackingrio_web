import { action, observable, computed } from "mobx";
import EmpresaService from '../services/empresaService';

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
                    this.dados.funcionarios = response[0].funcionario;
                },
                (error) => {
                    console.log(error);
                    this.error = error;
                }
            )
    }
}