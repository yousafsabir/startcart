import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { onSnapshot, doc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import toast from "react-hot-toast";

const NavCart = () => {
    const isUserPresent = useSelector((state) => state.auth.isPresent);
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
                <BsCart3 className="text-xl" />
                <p>Cart</p>
            </Link>
        </div>
    );
};

export default NavCart;
