import UserStore from "./userStore";
import EmpresaStore from "./empresaStore";

const userStore = new UserStore();
const empresaStore = new EmpresaStore();;

export default {
  user: userStore,
  empresa: empresaStore
};