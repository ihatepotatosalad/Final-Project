import { apiSlice } from "../../App/api/apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => '/users',
            keepUnusedDataFor: 5,
        }),
        getUserById: builder.query({
            query: id => `/users/${id}`,
        })


    })
})

export const {
    useGetUsersQuery,
    useGetUserByIdQuery
} = usersApiSlice