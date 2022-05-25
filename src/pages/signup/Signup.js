import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import "./Signup.css";
// const auth = getAuth();

const Signup = () => {
    const [email, setEmail] = useState("second");
    const [password, setPassword] = useState("second");
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                                onChange={(e) => setPassword(e.target.value)}
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
                            // onClick={async () => {
                            //     try {
                            //         let userCredential =
                            //             await createUserWithEmailAndPassword(
                            //                 auth,
                            //                 email,
                            //                 password
                            //             );
                            //         console.log(userCredential);
                            //         const user = userCredential.user;
                            //         console.log(user);
                            //     } catch (error) {
                            //         console.log(error);
                            //     }
                            // }}
                        >
                            SignUp
                        </button>
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
