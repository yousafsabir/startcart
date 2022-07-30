import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../../assets/images/logo.png";
import NavCart from "./NavCart";
import NavCTA from "./NavCTA";
import NavProfile from "./NavProfile";

const Navbar = () => {
    const isUserPresent = useSelector((state) => state.auth.isPresent);
    return (
        <>
            <section className="fixed top-0 z-50 w-full bg-gray-200">
                {/* Main Div */}
                <div className="mx-auto flex h-[70px] max-w-7xl items-center justify-between px-4">
                    {/* Logo and Brand Name */}
                    <Link to={"/"} className="flex items-center gap-4">
                        <img src={Logo} alt="website-logo" className="w-12" />
                        <h1 className="text-3xl font-[600]">
                            <span className="italic text-sky-600">Start </span>
                            Cart
                        </h1>
                    </Link>

                    {/* Right Side */}
                    <div className="flex items-center gap-6">
                        {isUserPresent ? <NavProfile /> : <NavCTA />}

                        <div className="h-8 w-[2px] bg-gray-400"></div>

                        <NavCart />
                    </div>
                </div>
            </section>

            {/* to accomolate navbar's height */}
            <div className="h-[70px] w-full"></div>
        </>
    );
};

export default Navbar;
