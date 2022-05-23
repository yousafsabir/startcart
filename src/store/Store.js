import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/productSlice";

const Store = configureStore({
    reducer: {
        product: productSlice,
    },
});

export default Store;
