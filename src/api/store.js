import {configureStore} from "@reduxjs/toolkit";
import {dataApi} from "./paltteApi";
import {tagsDataApi} from "./tagsApi";
import {brandsDataApi} from "./brandApi";

export const store = configureStore({
    reducer: {
        // Add reducers here if you have any
        [dataApi.reducerPath]: dataApi.reducer,
        [tagsDataApi.reducerPath]: tagsDataApi.reducer,
        [brandsDataApi.reducerPath]: brandsDataApi.reducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(dataApi.middleware, tagsDataApi.middleware, brandsDataApi.middleware ),
});

