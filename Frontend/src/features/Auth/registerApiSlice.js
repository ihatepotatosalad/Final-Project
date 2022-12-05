import { apiSlice } from "../../App/api/apiSlice";

export const registerApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({

        register: builder.mutation({
            query: credentials => ({
                url: '/register',
                method: 'POST',
                body: { ...credentials }
            })
        }),
    })
})

export const {
    useRegisterMutation
} = registerApiSlice