import { action, observable } from "mobx";
import ExampleService from "../services/exampleService";

export default class ExampleStore {
    @observable objets = [];
    @observable loading = false;

    @action
    async loadObjects() {
        this.loading = true;
        await ExampleService.getObjects().then(
            response => {
                this.objects = response;
            },
            error => {
                this.error = error;
            }
        );
        this.loading = false;
    }
}
