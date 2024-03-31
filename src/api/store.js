import {configureStore} from "@reduxjs/toolkit";
import {dataApi} from "./paltteApi";

export const store = configureStore({
    reducer: {
        // Add reducers here if you have any
        [dataApi.reducerPath]: dataApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(dataApi.middleware),
});