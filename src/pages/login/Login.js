import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../../config/firebase.config";
import Spinner from "react-spinner-material";
import { useNavigate } from "react-router";
import "./Login.css";

const Login = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const clearValues = () => {
        setEmail("");
        setPassword("");
    };
    const handleLogin = async () => {
        try {
            setLoading(true);
            let result = await login(email, password);
            console.log(result);
            navigate("/");
        } catch (error) {
            toast.error(error);
        } finally {
            setLoading(false);
            clearValues();
        }
    };
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
                            value={email}
                            className="login-input"
                            name=""
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
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
                            value={password}
                            className="login-input"
                            onChange={(e) => setPassword(e.target.value)}
                            name=""
                            id="password"
                        />
                    </div>
                    <button
                        className="login-button"
                        disabled={loading}
                        onClick={() => handleLogin()}
                    >
                        {loading ? (
                            <Spinner
                                radius={17}
                                color={"#fff"}
                                stroke={2}
                                visible={true}
                            />
                        ) : (
                            "Login"
                        )}
                    </button>
                    <span>
                        Don't have an account?{" "}
                        <Link to="/signup">Sign up here</Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Login;
