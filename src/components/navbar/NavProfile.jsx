import React, { useState } from "react";
import Pic from "../../assets/images/man7.png";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";

const NavProfile = () => {
    const profile = {
        fName: "Yousaf",
        lName: "Sabir",
    };
    const [subMenu, setSubMenu] = useState(false);
    return (
        <div
            className="relative flex cursor-pointer items-center gap-3"
            onClick={() => setSubMenu((prev) => !prev)}
        >
            <img
                src={Pic}
                alt="Profile-picture"
                className="h-12 w-12 rounded-full "
            />
            <div className="flex select-none items-center gap-2">
                <p>{`${profile.fName} ${profile.lName}`}</p>
                {subMenu ? <VscTriangleDown /> : <VscTriangleUp />}
            </div>
            {/* Dropdown Menu */}
            <ul
                className="absolute left-0 right-0 top-[105%] cursor-default space-y-2 rounded bg-gray-50 p-2"
                style={subMenu ? { dispaly: "block" } : { display: "none" }}
            >
                <li className="cursor-pointer rounded-sm p-2 py-[2px] hover:bg-gray-100">
                    My Profile
                </li>
                <li className="cursor-pointer rounded-sm p-2 py-[2px] hover:bg-gray-100">
                    My Orders
                </li>
                <li className="h-[2px] w-full bg-gray-400"></li>
                <li className="cursor-pointer rounded-sm p-2 py-[2px] hover:bg-gray-100">
                    Help
                </li>
                <li className="cursor-pointer rounded-sm p-2 py-[2px] hover:bg-gray-100">
                    Logout
                </li>
            </ul>
        </div>
    );
};

export default NavProfile;
