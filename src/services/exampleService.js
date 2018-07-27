import axios from "axios";
import { API_URL } from "../constants/strings";
import OauthHelper from "../helpers/oauthHelper";

class ExampleService {
    getListSemaphore() {
        const idUser = OauthHelper.getUserIdBase64();
        const AuthStr = `Basic ${idUser}`;

        return axios
            .get(`${API_URL}/api/`, { headers: { Authorization: AuthStr } })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw error;
            });
    }
}

export default new ExampleService();
