import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import productSlice from "./features/productSlice";

const Store = configureStore({
    reducer: {
        cart: cartSlice,
        product: productSlice,
    },
});

export default Store;
