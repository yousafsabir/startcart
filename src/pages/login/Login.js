import React from "react";
import "./Login.css";

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-outer">
                <div className="login-inner">
                    <h2 className="login-heading">Login In</h2>
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
                            className="login-input"
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
                        <label htmlFor="password" style={{ fontSize: "14px" }}>
                            Password
                        </label>
                        <input
                            type="password"
                            className="login-input"
                            name=""
                            id="password"
                        />
                    </div>
                    <button className="login-button">Login</button>
                    <span>
                        Don't have an account? <a href="/">Sign up here</a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Login;
