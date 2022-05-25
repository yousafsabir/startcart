import React from "react";
import { Routes, Route } from "react-router";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import Cart from "../pages/cart/Cart";
import Store from "../pages/store/Store";

const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/store" element={<Store />} />
            </Routes>
        </div>
    );
};

export default Routing;
