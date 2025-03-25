import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseUri from "../config/baseUri";

const apiSlice = createApi({
    reducerPath: 'ere-bussiness',
    baseQuery: fetchBaseQuery({ baseUrl: baseUri }),
    tagTypes: ['Users'],
    endpoints: (builder) => ({

    })
})

export default apiSlice