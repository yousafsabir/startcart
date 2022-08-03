import React from "react";
import Logo from "../assets/images/logo.png";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="h-[100px] w-full bg-blue-100 p-3 sm:h-[70px] sm:p-0">
            <div className="mx-auto my-auto flex h-full max-w-7xl flex-col items-center justify-between px-4 sm:flex-row">
                <div className="flex items-center gap-2">
                    <img src={Logo} alt="website-logo" className="w-7" />
                    <h2 className="text-lg font-semibold">
                        <span className="italic text-sky-600">Start </span>Cart
                    </h2>
                    <div className="mx-2 h-8 w-[2px] bg-gray-400"></div>
                    <p>
                        &copy; 2022 - <span className="text-2xl">&infin;</span>
                    </p>
                    <div className="mx-2 h-8 w-[2px] bg-gray-400"></div>
                    <Link to={"/about"} className="text-lg text-gray-700">
                        About
                    </Link>
                </div>
                <div className="text-[22px]">
                    <a
                        href="https://github.com/yousafsabir/startcart"
                        target="_blank"
                    >
                        <BsGithub className="text-gray-500 transition duration-300 hover:text-gray-800" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
