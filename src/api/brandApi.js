import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_ENDPOINT} from "../constants";

export const brandsDataApi = createApi({
    reducerPath:"brands",
    baseQuery: fetchBaseQuery({ baseUrl: API_ENDPOINT }),
    endpoints: (builder) => ({
        // Define a method to fetch data using GET
        getBrands: builder.query({
            query: (page) => {
                return `/brands`
            },
            providesTags: ['brands']
        }),

    })});

export const {
    useGetBrandsQuery,
} = brandsDataApi;