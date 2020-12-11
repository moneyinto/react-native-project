import Base from "./base";
import { action, observable } from "mobx";
import { getBanner, getCategoryList } from "../services/home";

class Home extends Base {
    @action
    async getBanner(platform) {
        return await getBanner(platform);
    }

    @action
    async getCategoryList() {
        return await getCategoryList();
    }
}

export default new Home();