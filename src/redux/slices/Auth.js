import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { collection, getDocs, getDoc, doc, setDoc } from "firebase/firestore";
import { db, auth } from "../../firebase";
import STATUSES from "../STATUSES";
import AUTH from "../actions/AUTH";
import toast from "react-hot-toast";

const style = {
    normal: "color: #111827; background-color: #34D399",
    error: "color: #B91C1C; background-color: #34D399",
};

const Auth = createSlice({
    name: "auth",
    initialState: {
        admins: [],
        current: {},
        isPresent: false,
        status: STATUSES.IDLE,
        action: AUTH.IDLE,
    },
    reducers: {
        addAdmin: (state, action) => {
            // only add if it doesn't exist before
            if (state.admins.length === 0) {
                state.admins = [...state.admins, action.payload];
                console.log(state.admins);
            } else if (!state.admins.includes(action.payload)) {
                state.admins = [...state.admins, action.payload];
                console.log(state.admins);
            }
        },
        addCurrent: (state, action) => {
            state.current = action.payload;
            console.log("Current User:", state.current);
            state.isPresent = true;
        },
        removeCurrent: (state) => {
            state.current = {};
            state.isPresent = false;
        },
        setStatus: (state, action) => {
            state.status = action.payload;
        },
        setAction: (state, action) => {
            state.action = action.payload;
        },
    },
});

export const { addAdmin, setStatus, setAction, addCurrent, removeCurrent } =
    Auth.actions;

export default Auth.reducer;

// Thunk Ops

export const login = createAsyncThunk("login", async (args, thunkApi) => {
    // const navigate = useNavigate();
    thunkApi.dispatch(setStatus(STATUSES.LOADING));
    thunkApi.dispatch(setAction(AUTH.LOGIN));
    console.log(`%c 🔴🟠🟡 Logging in`, style.normal);
    try {
        await signInWithEmailAndPassword(auth, args.email, args.pass);
        const admins = thunkApi.getState().auth.admins;
        if (admins.includes(auth.currentUser.uid)) {
            await signOut(auth);
            toast("⚠ You cannot login in with Admin Credentials", {
                duration: 3000,
                style: { backgroundColor: "yellow" },
            });
            thunkApi.dispatch(setStatus(STATUSES.ERROR));
            thunkApi.dispatch(setAction(AUTH.LOGIN));
        } else {
            const uid = auth.currentUser.uid;
            const docRef = doc(db, "users", uid);
            const snapshot = await getDoc(docRef);
            thunkApi.dispatch(addCurrent(snapshot.data()));
            thunkApi.dispatch(setStatus(STATUSES.IDLE));
            thunkApi.dispatch(setAction(AUTH.LOGIN));
            console.log(`%c 🎉 Successfully logged in`, style.normal);
            toast(`🥳 Welcome Back ${snapshot.data().name}`, {
                duration: 3000,
                style: { backgroundColor: "green" },
            });
        }
    } catch (error) {
        thunkApi.dispatch(setStatus(STATUSES.ERROR));
        thunkApi.dispatch(setAction(AUTH.LOGIN));
        console.log(
            `%c ❌ Couldn't Login { type:${error.name} , msg: ${error.message}}`,
            style.error
        );
        toast(`${error.message}`, {
            duration: 3000,
            style: { backgroundColor: "red" },
        });
    }
});

export const logout = createAsyncThunk("logout", async (args, thunkApi) => {
    thunkApi.dispatch(setStatus(STATUSES.LOADING));
    thunkApi.dispatch(setAction(AUTH.LOGOUT));
    console.log(`%c 🔴🟠🟡 Logging out`, style.normal);
    try {
        thunkApi.dispatch(removeCurrent());
        await signOut(auth);
        thunkApi.dispatch(setStatus(STATUSES.IDLE));
        thunkApi.dispatch(setAction(AUTH.LOGOUT));
        toast("✔ Logged Out Succesfully", {
            duration: 3000,
            style: { backgroundColor: "green" },
        });
    } catch (error) {
        thunkApi.dispatch(setStatus(STATUSES.ERROR));
        thunkApi.dispatch(setAction(AUTH.LOGOUT));
        console.log(
            `%c ❌ Couldn't Logout { type:${error.name} , msg: ${error.message}}`,
            style.error
        );
    }
});
export const signup = createAsyncThunk("logout", async (args, thunkApi) => {
    try {
        thunkApi.dispatch(setStatus(STATUSES.LOADING));
        thunkApi.dispatch(setAction(AUTH.SIGNUP));
        await createUserWithEmailAndPassword(auth, args.email, args.pass);
        const uid = auth.currentUser.uid;
        const docRef = doc(db, "users", uid);
        await setDoc(docRef, {
            name: args.name,
            email: args.email,
            address: args.address,
            phone: args.phone,
            cartQty: "0",
            uid,
        });
        thunkApi.dispatch(
            addCurrent({
                name: args.name,
                email: args.email,
                address: args.address,
                phone: args.phone,
                cartQty: "0",
                uid,
            })
        );
        thunkApi.dispatch(setStatus(STATUSES.IDLE));
        thunkApi.dispatch(setAction(AUTH.SIGNUP));
        toast("✔ Signed Up Succesfully", {
            duration: 3000,
            style: { backgroundColor: "green" },
        });
    } catch (error) {
        thunkApi.dispatch(setStatus(STATUSES.ERROR));
        thunkApi.dispatch(setAction(AUTH.SIGNUP));
        toast(`❌ ${error.message}`, {
            duration: 3000,
            style: { backgroundColor: "red" },
        });
        console.log(
            `%c ❌ Couldn't Signup { type:${error.name} , msg: ${error.message}}`,
            style.error
        );
    }
});

export const fetchAdmins = createAsyncThunk(
    "admins/fetch",
    async (arg, thunkApi) => {
        thunkApi.dispatch(setStatus(STATUSES.LOADING));
        thunkApi.dispatch(setAction(AUTH.FETCHADMINS));
        console.log(`%c 🔴🟠🟡 Fetching Admins`, style.normal);
        try {
            const collectionRef = collection(db, "admins");
            const snapshot = await getDocs(collectionRef);
            snapshot.docs.map((doc) =>
                thunkApi.dispatch(addAdmin(doc.data().uid))
            );
            const admins = thunkApi.getState().auth.admins;
            if (admins.length === 0) {
                thunkApi.dispatch(setStatus(STATUSES.ERROR));
                thunkApi.dispatch(setAction(AUTH.FETCHADMINS));
                console.log(
                    `%c ❌ Couldn't fetch admins, internet error`,
                    style.error
                );
            } else {
                thunkApi.dispatch(setStatus(STATUSES.IDLE));
                thunkApi.dispatch(setAction(AUTH.IDLE));
                console.log(`%c 🎉 Successfully fetched admins`, style.normal);
            }
        } catch (error) {
            thunkApi.dispatch(setStatus(STATUSES.ERROR));
            thunkApi.dispatch(setAction(AUTH.FETCHADMINS));
            console.log(
                `%c ❌ Couldn't fetch admins { type:${error.name} , msg: ${error.message}}`,
                style.error
            );
        }
    }
);
