import axios from "axios";
import * as interfaces from "../constants/interfaces";
import { apiRoutes } from "../constants/generalConstants";

const API_SERVICE = process.env.REACT_APP_API_URL;
const BASE_URL = "/api";
const TOKEN = process.env.REACT_APP_API_TOKEN;

const config = {
    headers: { Authorization: `Bearer ${TOKEN}` },
};

async function login(user: interfaces.USER_LOGIN_TYPE) {
    let url = API_SERVICE + BASE_URL + apiRoutes.POST_LOGIN;
    return await axios.post(url, { user: { ...user } }, config);
}

async function register(newUser: interfaces.USER_REGISTER_TYPE) {
    let url = API_SERVICE + BASE_URL + apiRoutes.POST_REGISTER;
    return await axios.post(url, { user: { ...newUser } }, config);
}

export { login, register };
