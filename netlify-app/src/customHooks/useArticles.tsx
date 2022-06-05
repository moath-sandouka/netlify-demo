import { ARTICLE_TYPE } from "../constants/interfaces";
import { useQuery } from "react-query";
import { getFilteredArticles } from "../services/article";
import { RETRIEVED_ARTICLES_RESPONSE_DATA } from "../constants/interfaces";

export default function useArticles(filterArticles: ARTICLE_TYPE) {
    return useQuery<RETRIEVED_ARTICLES_RESPONSE_DATA, Error>(
        "articles",
        () => getFilteredArticles(filterArticles),
        {
            retry: false,
            refetchOnWindowFocus: false,
        }
    );
}
