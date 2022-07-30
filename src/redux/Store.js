import { configureStore } from "@reduxjs/toolkit";
import Auth from "./slices/Auth";

const Store = configureStore({
    reducer: {
        auth: Auth,
    },
});

export default Store;
