import { configureStore } from "@reduxjs/toolkit";
import sliceAuth from "./sliceAuth";
import sliceData from "./sliceData";

export const store = configureStore({
    reducer: {
        data: sliceData,
        auth: sliceAuth,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
