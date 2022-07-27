import React from "react";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";

const NavCart = () => {
    const count = 3;
    return (
        <div>
            <Link to="/cart" className="relative flex items-center gap-3">
                <BsCart3 className="text-xl" />
                <div className="absolute top-[-5px] left-[21%] flex h-4 w-4 items-center justify-center rounded-full bg-sky-600 text-sm text-white">
                    <span className="mb-[1px]">{count}</span>
                </div>
                <p>Cart</p>
            </Link>
        </div>
    );
};

export default NavCart;
