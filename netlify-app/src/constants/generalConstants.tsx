export const constRoutes = {
    HOME: "/Home",
    SIGNIN: "/Sign-in",
    SIGNUP: "/Sing-up",
};

export const apiRoutes = {
    POST_LOGIN: "/users/login",
    POST_REGISTER: "/users",
    GET_PROFILE: "/profiles",
    GET_ARTICLES: "/articles",
};

export const apiUrls = {
    API_SERVICE: process.env.REACT_APP_API_URL,
    BASE_URL: "/api",
    TOKEN: process.env.REACT_APP_API_TOKEN,
};
