import axios from "axios";
import * as interfaces from "../constants/interfaces";
import { apiRoutes, apiUrls } from "../constants/generalConstants";
import { serialize } from "../utils/api";

const config = {
    headers: { Authorization: `Bearer ${apiUrls.TOKEN}` },
};

async function getAllArticles() {
    let url = apiUrls.API_SERVICE + apiUrls.BASE_URL + apiRoutes.GET_ARTICLES;
    console.log(url);
    let result = await axios.get(url);
    return result.data;
}

async function getFilteredArticles(articleOptions: interfaces.ARTICLE_TYPE) {
    let url =
        apiUrls.API_SERVICE +
        apiUrls.BASE_URL +
        apiRoutes.GET_ARTICLES +
        "?" +
        serialize(articleOptions);
    console.log(url);
    let result = await axios.get(url);
    return result.data;
}

export { getAllArticles, getFilteredArticles };
