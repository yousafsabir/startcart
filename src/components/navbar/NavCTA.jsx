import React from "react";
import { Link } from "react-router-dom";

const NavCTA = () => {
    return (
        <div className="space-x-4">
            <Link
                to="/signup"
                className="rounded border-[1.5px] border-sky-600 bg-transparent py-2 px-5 text-sky-600 transition-all hover:scale-110 hover:shadow-md"
            >
                Sign Up
            </Link>
            <Link
                to="/login"
                className="rounded border-[1.5px] border-sky-600 bg-sky-600 py-2 px-5 text-white transition-all hover:scale-110 hover:shadow-md"
            >
                Login
            </Link>
        </div>
    );
};

export default NavCTA;
