import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_ENDPOINT = 'http://35.156.40.32:8080';
// const API_ENDPOINT = 'http://localhost:8080';
export const dataApi = createApi({

    baseQuery: fetchBaseQuery({ baseUrl: API_ENDPOINT }),
    endpoints: (builder) => ({
        // Define a method to fetch data using GET
        getPalettes: builder.query({
            query: (page) => {
                return `/palettes?_page=${page}&_limit=6`
            },
            providesTags: ['palettes']
        }),



        deleteData: builder.mutation({
            query: (id) => ({
                url: `/palettes/${id}`, // Assuming your delete endpoint is something like '/delete/:id'
                method: 'DELETE',
            }),
            invalidatesTags: ['palettes']
        }),
        createData: builder.mutation({
            query: (newData) => ({
                url: '/palettes',
                method: 'POST',
                body: newData,
            }),
            invalidatesTags: ['palettes']
        }),
        editData: builder.mutation({
            query: (payLoad) => {
               return {
                    url: `/palettes/${payLoad.id}`, // Assuming your edit endpoint is something like '/edit/:id'
                        method: 'PUT',
                        body: payLoad,
                }
            },
            invalidatesTags: ['palettes']
        }),
    }),
});

export const {
    useGetPalettesQuery,
    useDeleteDataMutation,
    useCreateDataMutation,
    useEditDataMutation
} = dataApi;