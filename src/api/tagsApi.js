import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_ENDPOINT} from "../constants";

export const tagsDataApi = createApi({
    reducerPath:"tags",
    baseQuery: fetchBaseQuery({ baseUrl: API_ENDPOINT }),
    endpoints: (builder) => ({
        // Define a method to fetch data using GET
        getTags: builder.query({
            query: (page) => {
                return `/tags`
            },
            providesTags: ['tags']
        }),

    })});

export const {
    useGetTagsQuery,
} = tagsDataApi;