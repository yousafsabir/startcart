import { createSlice } from "@reduxjs/toolkit";
// import { addDoc, collection } from "firebase/firestore";
// import { db } from "../../config/firebase.config";

const initialState = {
    value: [],
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        add: (state, action) => {
            state.value = [...state.value, action.payload];
        },
        remove: (state, action) => {
            state.value = state.value.filter(
                (element) => element.id !== action.payload
            );
        },
        increment: (state, action) => {
            state.value.map((product) => {
                if (product.id === action.payload) {
                    product.qty += 1;
                    product.price += product.initialPrice;
                    return product;
                }
                return product;
            });
        },
        decrement: (state, action) => {
            state.value.map((product) => {
                if (product.id === action.payload && product.qty > 1) {
                    product.qty -= 1;
                    product.price -= product.initialPrice;
                    return product;
                }
                return product;
            });
        },
    },
});

export const { add, remove, increment, decrement } = productSlice.actions;

export default productSlice.reducer;
