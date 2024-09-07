import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slices/CounterSlice";
import CategorySlice from "./slices/CategorySlice";
import AllDataSlice from "./slices/AllDataSlice";

export const store = configureStore({
    reducer: {
        counter: CounterSlice,
        category: CategorySlice,
        data: AllDataSlice,
    },
});
