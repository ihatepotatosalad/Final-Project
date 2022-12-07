import { apiSlice } from "../../App/api/apiSlice";

export const postsApiSlice = apiSlice.injectEndpoints({
    tagTypes: ['Posts'],
    endpoints: builder => ({
        getPosts: builder.query({
            query: () => '/posts',
            providesTags: ['Posts']

        }),
        sendPosts: builder.mutation({
            query: (message) => ({
                url: '/posts',
                method: 'POST',
                body: { ...message }
            }),
            invalidatesTags: ['Posts']
        }),

    })
})

export const {
    useGetPostsQuery,
    useSendPostsMutation

} = postsApiSlice
