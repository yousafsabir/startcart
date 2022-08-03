import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import ReactLogo from "../assets/images/React.png";
import Redux from "../assets/images/Redux.png";
import Router from "../assets/images/react-router.png";
import Tailwind from "../assets/images/tailwindcss.png";
import Firebase from "../assets/images/Firebase.png";
import {
    BsArrowLeftCircle,
    BsGithub,
    BsInstagram,
    BsTwitter,
} from "react-icons/bs";

const About = () => {
    const navigate = useNavigate();
    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center">
            <div className="relative mx-auto my-0 flex max-w-4xl flex-col items-center justify-center gap-8 p-4">
                {/* back button */}
                <button
                    className="absolute left-1/2 hidden md:top-[-5%] md:left-[-5%] md:block"
                    onClick={() => navigate(-1)}
                >
                    <BsArrowLeftCircle className="text-3xl text-gray-600" />
                </button>
                <button className="md:hidden" onClick={() => navigate(-1)}>
                    <BsArrowLeftCircle className="text-3xl text-gray-600" />
                </button>
                <div className="flex items-center gap-4">
                    <img src={Logo} alt="logo" className="w-24" />
                    <h2 className="text-5xl font-bold">
                        <span className="italic text-sky-600">Start </span>Cart
                    </h2>
                </div>
                <p className="text-center text-xl text-gray-700">
                    A dummy online store made with:
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                    <img src={ReactLogo} alt="react" className="w-[104px]" />
                    <img src={Redux} alt="redux" className="w-32" />
                    <img src={Router} alt="react-router" className="w-28" />
                    <img src={Tailwind} alt="tailwindcss" className="w-60" />
                    <img src={Firebase} alt="firebase" className="w-56" />
                </div>
                <p className="text-center text-xl text-gray-700">
                    It also has an{" "}
                    <a
                        href="http://admin-startcart.vercel.app"
                        target="_blank"
                        className="text-sky-500"
                    >
                        admin panel
                    </a>{" "}
                    where admins can add, remove and edit products
                </p>
                <p className="text-center text-xl text-gray-700">
                    Made by{" "}
                    <span className="text-sky-500">Muhammad Yousaf</span>
                </p>
                <div className="flex items-center gap-2">
                    <span className="text-xl text-gray-700">catch me at:</span>
                    <a href="https://github.com/yousafsabir/" target="_blank">
                        <BsGithub className=" text-[22px] text-gray-500 transition duration-300 hover:text-gray-800" />
                    </a>
                    <a href="https://twitter.com/yousafsabir7" target="_blank">
                        <BsTwitter className=" text-[22px] text-gray-500 transition duration-300 hover:text-sky-500" />
                    </a>
                    <a
                        href="https://instagram.com/yousafsabir7"
                        target="_blank"
                    >
                        <BsInstagram className=" text-[22px] text-gray-500 transition duration-300 hover:text-fuchsia-500" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
