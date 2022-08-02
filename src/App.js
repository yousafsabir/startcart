import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { checkForLoggedIn, fetchAdmins } from "./redux/slices/Auth";
import { auth } from "./firebase";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Catagory from "./pages/Catagory";
import Trending from "./pages/Trending";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";

function App() {
    const dispatch = useDispatch();
    // loading Admins
    useEffect(() => {
        dispatch(fetchAdmins());
    }, []);

    // Loading user automatically
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            dispatch(checkForLoggedIn(user.uid));
        });
        return unsub;
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/catagory" element={<Catagory />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    );
}

export default App;
