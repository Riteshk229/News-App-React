import { configureStore } from "@reduxjs/toolkit";

import newsSlice from "../features/newsSlice";

export const store = configureStore({
    reducer: {
        NEWS : newsSlice
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    //     serializableCheck : false
    // }),
})