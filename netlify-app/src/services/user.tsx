import axios from "axios";
import * as interfaces from "../constants/interfaces";
import { apiRoutes, apiUrls } from "../constants/generalConstants";

const config = {
    headers: { Authorization: `Bearer ${apiUrls.TOKEN}` },
};

async function login(user: interfaces.USER_LOGIN_TYPE) {
    let url = apiUrls.API_SERVICE + apiUrls.BASE_URL + apiRoutes.POST_LOGIN;
    let result = await axios.post(url, { user: { ...user } }, config);
    return result.data;
}

async function register(newUser: interfaces.USER_REGISTER_TYPE) {
    let url = apiUrls.API_SERVICE + apiUrls.BASE_URL + apiRoutes.POST_REGISTER;
    let result = await axios.post(url, { user: { ...newUser } }, config);
    return result.data;
}

export { login, register };
