import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_ENDPOINT = 'http://localhost:3001';
export const dataApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: API_ENDPOINT }),
    endpoints: (builder) => ({
        // Define a method to fetch data using GET
        getPalettes: builder.query({
            query: () => '/palettes',
        }),
    }),
});

export const { useGetPalettesQuery } = dataApi;