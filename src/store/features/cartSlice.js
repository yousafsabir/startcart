import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
// import { addDoc, collection } from "firebase/firestore";
// import { db } from "../../config/firebase.config";

const initialState = {
    value: [],
};

export const cartSlice = createSlice({
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
                    product.finalPrice += product.initialPrice;
                    return product;
                }
                return product;
            });
        },
        decrement: (state, action) => {
            state.value.map((product) => {
                if (product.id === action.payload && product.qty > 1) {
                    product.qty -= 1;
                    product.finalPrice -= product.initialPrice;
                    return product;
                } else if (product.id === action.payload && product.qty === 1) {
                    toast.warning("The quantity  is already at its lowest");
                }
                return product;
            });
        },
    },
});

export const { add, remove, increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;
