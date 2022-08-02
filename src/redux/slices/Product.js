import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import {
    collection,
    getDocs,
    getDoc,
    doc,
    setDoc,
    addDoc,
    query,
    where,
    deleteDoc,
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
            const user = thunkApi.getState().auth.current;
            const collectionRef = collection(db, `users/${user.uid}/cart`);
            const docRef = doc(db, "users", user.uid);
            const q = query(
                collectionRef,
                where("productId", "==", args.productId)
            );
            // Checking if the product already exists in the cart
            const snapshot = await getDocs(q);
            if (snapshot.docs.length !== 0) {
                toast("⚠ Item already in the cart", {
                    duration: 3000,
                    style: { backgroundColor: "yellow" },
                });
                thunkApi.dispatch(setStatus(STATUSES.IDLE));
                thunkApi.dispatch(setAction(PRODUCT.ADDTOCART));
            } else {
                await addDoc(collectionRef, args);
                await setDoc(docRef, {
                    ...user,
                    cartQty: user.cartQty + 1,
                });
                thunkApi.dispatch(setStatus(STATUSES.IDLE));
                thunkApi.dispatch(setAction(PRODUCT.ADDTOCART));
                console.log(`%c ✔ Added to cart`, style.normal);
                toast("✔ Added to cart", {
                    duration: 3000,
                    style: { backgroundColor: "green" },
                });
            }
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

export const increaseQty = createAsyncThunk(
    "increaseQty",
    async (args, thunkApi) => {
        try {
            console.log("⬆ increasing qty");
            const uid = thunkApi.getState().auth.current.uid;
            const docRef = doc(db, `users/${uid}/cart`, args.itemId);
            await setDoc(docRef, {
                ...args,
                qty: args.qty + 1,
            });
            console.log("qty increased");
        } catch (error) {
            console.log(
                `%c ❌ Couldn't increase Qty { type:${error.name} , msg: ${error.message}}`,
                style.error
            );
            toast(`❌ ${error.message}`, {
                duration: 3000,
                style: { backgroundColor: "red" },
            });
        }
    }
);
export const decreaseQty = createAsyncThunk(
    "increaseQty",
    async (args, thunkApi) => {
        try {
            console.log("⬇ decreasing qty");
            const uid = thunkApi.getState().auth.current.uid;
            const docRef = doc(db, `users/${uid}/cart`, args.itemId);
            await setDoc(docRef, {
                ...args,
                qty: args.qty - 1,
            });
            console.log("qty decreased");
        } catch (error) {
            console.log(
                `%c ❌ Couldn't decrease Qty { type:${error.name} , msg: ${error.message}}`,
                style.error
            );
            toast(`❌ ${error.message}`, {
                duration: 3000,
                style: { backgroundColor: "red" },
            });
        }
    }
);

export const removeItem = createAsyncThunk(
    "removeItem",
    async (args, thunkApi) => {
        try {
            console.log("🗑 removing doc");
            const user = thunkApi.getState().auth.current;
            const docRef = doc(db, `users/${user.uid}/cart`, args);
            await deleteDoc(docRef);
            const userRef = doc(db, "users", user.uid);
            await setDoc(userRef, {
                ...user,
                cartQty: user.cartQty - 1,
            });
            console.log("🗑 doc removed");
        } catch (error) {
            console.log(
                `%c ❌ Couldn't remove doc { type:${error.name} , msg: ${error.message}}`,
                style.error
            );
            toast(`❌ ${error.message}`, {
                duration: 3000,
                style: { backgroundColor: "red" },
            });
        }
    }
);
