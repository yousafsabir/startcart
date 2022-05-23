import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./Signup.css";
const Signup = () => {
    return (
        <>
            <Navbar />
            <div className="signup-container">
                <div className="signup-outer">
                    <div className="signup-inner">
                        <h2 className="signup-heading">Sign Up</h2>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.25rem",
                            }}
                        >
                            <label htmlFor="email" style={{ fontSize: "14px" }}>
                                Email
                            </label>
                            <input
                                type="email"
                                className="signup-input"
                                name=""
                                id="email"
                            />
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.25rem",
                            }}
                        >
                            <label
                                htmlFor="password"
                                style={{ fontSize: "14px" }}
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                className="signup-input"
                                name=""
                                id="password"
                            />
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.25rem",
                            }}
                        >
                            <label
                                htmlFor="password"
                                style={{ fontSize: "14px" }}
                            >
                                Repeat Password
                            </label>
                            <input
                                type="password"
                                className="signup-input"
                                name=""
                                id="password"
                            />
                        </div>
                        <button className="signup-button">SignUp</button>
                        <span>
                            Already have an account? <a href="/">Login here</a>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
