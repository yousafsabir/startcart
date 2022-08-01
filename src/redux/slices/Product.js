import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    collection,
    getDocs,
    getDoc,
    doc,
    setDoc,
    addDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import toast from "react-hot-toast";
import STATUSES from "../STATUSES";
import PRODUCT from "../actions/PRODUCT";

const style = {
    normal: "color: #111827; background-color: #A78BFA",
    error: "color: #B91C1C; background-color: #A78BFA",
};

const Product = createSlice({
    name: "product",
    initialState: {
        cartItems: [],
        status: STATUSES.IDLE,
        action: PRODUCT.IDLE,
    },
    reducers: {
        setStatus: (state, action) => {
            state.status = action.payload;
        },
        setAction: (state, action) => {
            state.action = action.payload;
        },
        setCartItems: (state, action) => {
            if (state.cartItems.length === 0) {
                state.cartItems = [...state.cartItems, action.payload];
                console.log("In State, check === 0", state.cartItems);
            } else {
                let index = state.cartItems.findIndex(
                    (product) => product.id === action.payload.id
                );
                if (index === -1) {
                    state.cartItems = [...state.cartItems, action.payload];
                    console.log("In State, check === -1", state.cartItems);
                }
            }
        },
    },
});

export const { setStatus, setAction, setCartItems } = Product.actions;

export default Product.reducer;

// Thunks

export const addToCart = createAsyncThunk(
    "addToCart",
    async (args, thunkApi) => {
        thunkApi.dispatch(setStatus(STATUSES.LOADING));
        thunkApi.dispatch(setAction(PRODUCT.ADDTOCART));
        console.log(`%c 🔴🟠🟡 Adding to cart`, style.normal);
        try {
            const uid = thunkApi.getState().auth.current.uid;
            const collectionRef = collection(db, `users/${uid}/cart`);
            await addDoc(collectionRef, args);
            thunkApi.dispatch(setStatus(STATUSES.IDLE));
            thunkApi.dispatch(setAction(PRODUCT.ADDTOCART));
            console.log(`%c ✔ Added to cart`, style.normal);
            toast("✔ Added to cart", {
                duration: 3000,
                style: { backgroundColor: "green" },
            });
        } catch (error) {
            thunkApi.dispatch(setStatus(STATUSES.ERROR));
            thunkApi.dispatch(setAction(PRODUCT.ADDTOCART));
            console.log(
                `%c ❌ Couldn't Add to cart { type:${error.name} , msg: ${error.message}}`,
                style.error
            );
            toast(`❌ ${error.message}`, {
                duration: 3000,
                style: { backgroundColor: "red" },
            });
        }
    }
);

export const cartItem = createAsyncThunk("cartItem", async (args, thunkApi) => {
    const arr = args;
    if (arr.length === 0) return;
    try {
        console.log("hello");
        arr.forEach(async (item) => {
            let docRef = doc(db, "products", item.productId);
            const snapshot = await getDoc(docRef);
            thunkApi.dispatch(setCartItems(snapshot.data()));
        });
    } catch (error) {
        console.log(
            `%c ❌ Couldn't Set to cart { type:${error.name} , msg: ${error.message}}`,
            style.error
        );
    }
});
