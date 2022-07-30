import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { fetchAdmins } from "./redux/slices/Auth";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Catagory from "./pages/Catagory";
import Trending from "./pages/Trending";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAdmins());
    }, []);
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/catagory" element={<Catagory />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    );
}

export default App;
