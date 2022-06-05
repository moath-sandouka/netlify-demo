export interface USER_LOGIN_TYPE {
    email: string;
    password: string;
}

export interface USER_REGISTER_TYPE {
    username: string;
    email: string;
    password: string;
}

export interface ARTICLE_TYPE {
    tag?: string;
    author?: string;
    favorited?: boolean;
    limit?: number;
    offset?: number;
}

export interface RETRIEVED_ARTICLES_RESPONSE_DATA{
    articles: Array<{}>,
    articlesCount: number
}