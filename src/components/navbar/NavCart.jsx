import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import toast from "react-hot-toast";

const NavCart = () => {
    const isUserPresent = useSelector((state) => state.auth.isPresent);
    const count = useSelector((state) => state.auth.current.cartQty);
    return (
        <div>
            <Link
                to={isUserPresent ? "/cart" : "/login"}
                className="relative flex items-center gap-3"
                onClick={() => {
                    if (!isUserPresent) {
                        toast("⚠ You need to first login", {
                            style: { backgroundColor: "yellow" },
                        });
                    }
                }}
            >
                <div className="absolute top-[-5px] left-[21%] flex h-4 w-4 items-center justify-center rounded-full bg-sky-600 text-sm text-white">
                    <span>{count ?? 0}</span>
                </div>
                <BsCart3 className="text-xl" />
                <p>Cart</p>
            </Link>
        </div>
    );
};

export default NavCart;
