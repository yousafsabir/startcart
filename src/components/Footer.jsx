import React from "react";
import Logo from "../assets/images/logo.png";
import { BsTwitter, BsGithub } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="h-[70px] w-full bg-blue-100">
            <div className="mx-auto my-auto flex h-full max-w-7xl items-center justify-between px-4">
                <div className="flex items-center gap-2">
                    <img src={Logo} alt="website-logo" className="w-7" />
                    <h2 className="text-lg font-semibold">
                        <span className="italic text-sky-600">Start </span>Cart
                    </h2>
                    <div className="h-8 w-[2px] bg-gray-400"></div>
                    <p>
                        &copy; 2022 - <span className="text-2xl">&infin;</span>
                    </p>
                </div>
                <div className="flex items-center gap-3 text-[22px]">
                    <a
                        href="https://github.com/yousafsabir/startcart"
                        target="_blank"
                    >
                        <BsGithub className="text-gray-500 transition duration-300 hover:text-gray-800" />
                    </a>
                    <a href="https://twitter.com/yousafsabir7" target="_blank">
                        <BsTwitter className="text-gray-500 transition duration-300 hover:text-sky-600" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
