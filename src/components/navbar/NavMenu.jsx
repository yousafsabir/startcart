import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { BsFillPersonFill } from "react-icons/bs";
import { logout } from "../../redux/slices/Auth";
import toast from "react-hot-toast";

const NavMenuCTA = () => {
    return (
        <div className="flex flex-wrap-reverse gap-4">
            <Link
                to="/signup"
                className="w-full rounded border-[1.5px] border-sky-600 bg-transparent py-2 px-5 text-center text-sky-600 transition-all hover:scale-110 hover:shadow-md"
            >
                Sign Up
            </Link>
            <Link
                to="/login"
                className="w-full rounded border-[1.5px] border-sky-600 bg-sky-600 py-2 px-5 text-center text-white transition-all hover:scale-110 hover:shadow-md"
            >
                Login
            </Link>
        </div>
    );
};

function NavMenuProfile(props) {
    const dispatch = useDispatch();

    const submit = () => {
        dispatch(logout());
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
        <div>
            {/* Profile */}
            <div className="mb-5 flex items-center justify-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-400">
                    <BsFillPersonFill className="text-3xl text-gray-200" />
                </div>
                <p className="max-w-[60%] overflow-hidden text-ellipsis whitespace-nowrap">
                    {props.username}
                </p>
            </div>
            <ul className="space-y-2 rounded bg-gray-100 p-2">
                <li
                    className="cursor-pointer rounded-sm p-2 py-[2px] hover:bg-gray-200"
                    onClick={doesntWork}
                >
                    My Profile
                </li>
                <li
                    className="cursor-pointer rounded-sm p-2 py-[2px] hover:bg-gray-200"
                    onClick={doesntWork}
                >
                    My Orders
                </li>
                <li
                    className="cursor-pointer rounded-sm p-2 py-[2px] hover:bg-gray-200"
                    onClick={doesntWork}
                >
                    Help
                </li>
                <li
                    className="cursor-pointer rounded-sm p-2 py-[2px] hover:bg-gray-200"
                    onClick={submit}
                >
                    Logout
                </li>
            </ul>
        </div>
    );
}

const NavMenu = (props) => {
    const isUserPresent = useSelector((state) => state.auth.isPresent);
    const user = useSelector((state) => state.auth.current);
    return (
        <div
            className="fixed top-[70px] bottom-0 right-0 w-[60%] bg-gray-50 p-4 transition-all duration-300 sm:hidden"
            style={props.isOpen ? { left: "40%" } : { left: "100%" }}
        >
            {isUserPresent ? (
                <NavMenuProfile username={user.name} />
            ) : (
                <NavMenuCTA />
            )}
        </div>
    );
};

export default NavMenu;
