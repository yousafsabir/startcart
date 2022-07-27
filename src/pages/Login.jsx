import React from "react";
import Pattern from "../assets/images/pattern5.jpg";
import Logo from "../assets/images/logo.png";

const Login = () => {
    return (
        <div className="relative flex min-h-screen w-full items-center justify-center">
            <div
                style={{ "--pattern": `url("${Pattern}")` }}
                className="absolute top-1/2 -z-10 h-[150px] w-full -translate-y-1/2 transform bg-bgg bg-cover bg-repeat"
            ></div>

            <div className="h-[425px] w-[350px] rounded-md bg-gray-100 p-3 shadow-lg">
                <div className="flex items-end justify-center gap-3">
                    <img src={Logo} alt="logo" className="w-12" />
                    <h2 className="pb-1 text-2xl font-bold">Login</h2>
                </div>
            </div>
        </div>
    );
};

export default Login;
