import React, { useEffect, useState, useMemo } from "react";
import { ARTICLE_TYPE } from "../constants/interfaces";
import { useQueryClient } from "react-query";
import { ToastContainer, toast } from "react-toastify";
import useArticles from "../customHooks/useArticles";

function Home() {
    const queryClient = useQueryClient();

    /*     const [filterArticles, setFilterArticles] = useState<ARTICLE_TYPE>({
        tag: "implementations",
        author: "Gerome",
        limit: 20,
        offset: 0,
    }); */

    let { data, isLoading, isError, error } = useArticles({
        tag: "implementations",
        author: "Gerome",
        limit: 20,
        offset: 0,
    });
    console.log({ data, isLoading, error });
    if (isLoading) {
        toast.info("Retrieving articles", {
            position: toast.POSITION.TOP_RIGHT,
        });
    } else {
        if (isError === true) {
            toast.error(error?.message, {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
        if (data) {
            //setArticlesArr(data?.articles);
            toast.success("articles retrieved successfully", {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    }
    return (
        <div>
            <div className="container-fluid d-flex flex-column banner">
                {/*front banner*/}
                <h1>conduit</h1>
                <p>A place to share your knowledge</p>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Home;
