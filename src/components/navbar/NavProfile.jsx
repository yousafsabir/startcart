import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/slices/Auth";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import { BsFillPersonFill } from "react-icons/bs";
import toast from "react-hot-toast";

const NavProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.current);
    const [subMenu, setSubMenu] = useState(false);

    const submit = () => {
        dispatch(logout());
        navigate("/");
    };

    const doesntWork = () => {
        toast(
            "This section doesn't work right now, but we'll make it work very soon 😊",
            {
                style: {
                    color: "#6d0f2c",
                    backgroundColor: "#FECDD3",
                },
            }
        );
    };
    return (
        <div
            className="relative flex cursor-pointer items-center gap-3"
            onClick={() => setSubMenu((prev) => !prev)}
        >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-400">
                <BsFillPersonFill className="text-3xl text-gray-200" />
            </div>
            <div className="flex select-none items-center gap-2">
                <p>{`${user?.name}`}</p>
                {subMenu ? <VscTriangleUp /> : <VscTriangleDown />}
            </div>
            {/* Dropdown Menu */}
            <ul
                className="absolute left-0 right-0 top-[105%] cursor-default space-y-2 rounded bg-gray-50 p-2"
                style={subMenu ? { dispaly: "block" } : { display: "none" }}
            >
                <li
                    className="cursor-pointer rounded-sm p-2 py-[2px] hover:bg-gray-100"
                    onClick={doesntWork}
                >
                    My Profile
                </li>
                <li
                    className="cursor-pointer rounded-sm p-2 py-[2px] hover:bg-gray-100"
                    onClick={doesntWork}
                >
                    My Orders
                </li>
                <li className="h-[2px] w-full bg-gray-400"></li>
                <li
                    className="cursor-pointer rounded-sm p-2 py-[2px] hover:bg-gray-100"
                    onClick={doesntWork}
                >
                    Help
                </li>
                <li
                    className="cursor-pointer rounded-sm p-2 py-[2px] hover:bg-gray-100"
                    onClick={submit}
                >
                    Logout
                </li>
            </ul>
        </div>
    );
};

export default NavProfile;
