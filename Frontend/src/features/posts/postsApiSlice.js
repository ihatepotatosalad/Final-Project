import { apiSlice } from "../../App/api/apiSlice";

export const postsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getPosts: builder.query({
            query: () => '/posts',


        })
    })
})

export const {
    useGetPostsQuery
} = postsApiSlice
