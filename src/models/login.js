import Base from "./base";
import { action, observable } from "mobx";
import { login } from "../services/login";

class Login extends Base {
    @action
    async submit(account, password) {
        return await login({ account, password });
    }
}

export default new Login();