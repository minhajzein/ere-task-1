import apiSlice from "../../apis/apiSlice";

const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAllUsers: builder.query({
            query: () => ({
                url: '/users'
            }),
            providesTags: ['Users'],
            keepUnusedDataFor: 5
        })
    })
})


export const { useGetAllUsersQuery } = usersApiSlice