import React, { useRef, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Spinner from "react-spinner-material";
import { toast } from "react-toastify";
import { signup } from "../../config/firebase.config";
import { useNavigate } from "react-router";

import "./Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState();
    console.log(user);
    const handleSignup = async () => {
        try {
            setLoading(true);
            let use = await signup(
                emailRef.current.value,
                passwordRef.current.value
            );
            setUser(use);
            toast.success("Successfully signed up");
            navigate("/");
        } catch (error) {
            toast.error("error");
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const emailRef = useRef();
    const passwordRef = useRef();
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
                                // value={email}
                                ref={emailRef}
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
                                ref={passwordRef}
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
                        <button
                            className="signup-button"
                            disabled={loading}
                            onClick={() => handleSignup()}
                        >
                            {loading ? (
                                <Spinner
                                    radius={17}
                                    color={"#fff"}
                                    stroke={2}
                                    visible={true}
                                />
                            ) : (
                                "SignUp"
                            )}
                        </button>
                        <span>
                            Already have an account?{" "}
                            <Link to="/login">Login here</Link>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
