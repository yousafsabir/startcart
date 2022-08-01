import { configureStore } from "@reduxjs/toolkit";
import Auth from "./slices/Auth";
import Product from "./slices/Product";

const Store = configureStore({
    reducer: {
        auth: Auth,
        product: Product,
    },
});

export default Store;
