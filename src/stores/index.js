import UserStore from "./userStore";
import ExampleStore from "./exampleStore";

const userStore = new UserStore();
const exampleStore = new ExampleStore();

export default {
  user: userStore,
  exampleStore
};
