import React from "react";
import { useState } from "react";
import { VscTriangleDown } from "react-icons/vsc";
import { BsCart3 } from "react-icons/bs";
import { useSelector } from "react-redux";
import Logo from "../../assets/images/logo.png";
import ProfilePic from "../../assets/images/man7.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth, logout } from "../../config/firebase.config";
const Navbar = (props) => {
    const count = useSelector((state) => state.cart.value.length);
    const profile = useAuth();
    const logoutHandle = async () => {
        try {
            await logout();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <nav>
            <div className="nav-container">
                <div className="nav-inner">
                    <div className="bottom">
                        <Link to="/" className="logo-text">
                            <img src={Logo} alt="" className="logo" />
                            <h1>
                                <span>Smart</span> Cart
                            </h1>
                        </Link>
                        <div className="bottom-right">
                            {/* login/signup */}
                            <div
                                className={`buttons ${
                                    profile ? "buttonsHide" : ""
                                }`}
                            >
                                <Link
                                    to="/signup"
                                    className="btn-outline transition btn-shadow"
                                >
                                    Sign Up
                                </Link>
                                <Link
                                    to="/login"
                                    className="btn-contain transition btn-shadow"
                                >
                                    Login
                                </Link>
                            </div>

                            {/* Profile section */}
                            <div
                                className={`profile ${
                                    profile ? "" : "profileHide"
                                }`}
                                style={{
                                    alignItems: "center",
                                    gap: "22px",
                                }}
                            >
                                <div
                                    className="profile"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                    }}
                                >
                                    <img src={ProfilePic} alt="" />
                                    <ul style={{ margin: "0", padding: "0" }}>
                                        <li className="profile-dropdown">
                                            <div
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    padding: "6px 0",
                                                    gap: "4px",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                <p
                                                    className="fs-100 bold clr-black-light"
                                                    style={{
                                                        marginBottom: "0",
                                                    }}
                                                >
                                                    {profile?.email}
                                                </p>
                                                <VscTriangleDown
                                                    style={{ width: "8px" }}
                                                />
                                            </div>
                                            <ul className="profile-submenu">
                                                <li className="upper-items bold fs-200 clr-black-main">
                                                    Profile
                                                </li>
                                                <li className="upper-items bold fs-200 clr-black-main">
                                                    My Orders
                                                </li>
                                                <li
                                                    style={{
                                                        width: "100%",
                                                        height: "1px",
                                                        backgroundColor:
                                                            "#505046",
                                                    }}
                                                ></li>
                                                <li className="fs-100 clr-black-extralight">
                                                    Help
                                                </li>
                                                <li
                                                    onClick={() =>
                                                        logoutHandle()
                                                    }
                                                    className="fs-100 clr-black-extralight"
                                                >
                                                    Logout
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bottom-right-line"></div>

                            {/* Cart */}
                            <Link to="/cart" className="cart">
                                <BsCart3 className="cart-logo" />
                                <div className="cart-count">{count}</div>
                                <p>Cart</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
