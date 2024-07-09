import { ARTICLES } from "../constants";
import  {apiSlice} from './apiSlice';


export const articlesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getArticles: builder.query({
            query: () => ({
                url: ARTICLES
            }),
            keepUnusedDataFor: 5
        })

    })
});

export const { useGetArticlesQuery } = articlesApiSlice;