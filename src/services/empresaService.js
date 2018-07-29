import axios from "axios";
import { API_URL } from "../constants/strings";

class EmpresaService {
    getEmpresa(nome) {
        const parameters = {
            "nome": nome
        };

        return axios
            .post(`${API_URL}empresa/login`, parameters)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw error;
            });
    }
}

export default new EmpresaService();