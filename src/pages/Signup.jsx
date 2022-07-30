import React, { useState, useEffect } from "react";
import Pattern from "../assets/images/pattern5.jpg";
import Logo from "../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../redux/slices/Auth";
import STATUSES from "../redux/STATUSES";
import AUTH from "../redux/actions/AUTH";

const Signup = () => {
    const dispatch = useDispatch();
    const status = useSelector((state) => state.auth.status);
    const action = useSelector((state) => state.auth.action);
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [pass, setPass] = useState("");
    const [cPass, setCPass] = useState("");

    const isValid = Boolean(
        name && email && address && phone && pass === cPass
    );

    const submit = () => {
        dispatch(
            signup({
                name,
                email,
                address,
                phone,
                pass,
            })
        );
    };
    useEffect(() => {
        if (status === STATUSES.IDLE && action === AUTH.SIGNUP) {
            setEmail("");
            setPass("");
            navigate("/");
        }
    }, [status, action]);
    return (
        <div className="relative flex min-h-screen w-full items-center justify-center">
            <div
                style={{ "--pattern": `url("${Pattern}")` }}
                className="absolute top-1/2 -z-10 h-[150px] w-full -translate-y-1/2 transform bg-bgg bg-cover bg-repeat"
            ></div>

            <form
                className="flex w-[450px] flex-col gap-1 rounded-md bg-gray-100 p-6  shadow-auth 2xl:w-[500px]"
                onSubmit={(e) => e.preventDefault()}
            >
                <div className="mb-4 flex items-end justify-center gap-3">
                    <img src={Logo} alt="logo" className="w-12" />
                    <h2 className="pb-1 text-2xl font-bold">Signup</h2>
                </div>
                <div className="flex gap-4">
                    <div className="flex-1">
                        <div className="group relative z-0 mb-6 w-full">
                            <input
                                type="text"
                                name="floating_name"
                                id="floating_name"
                                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-sky-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                                placeholder=" "
                                required
                                onChange={(e) => setName(e.target.value)}
                            />
                            <label
                                htmlFor="floating_name"
                                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-sky-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
                            >
                                Full Name
                            </label>
                        </div>
                        <div className="group relative z-0 mb-6 w-full">
                            <input
                                type="email"
                                name="floating_email"
                                id="floating_email"
                                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-sky-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                                placeholder=" "
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label
                                htmlFor="floating_email"
                                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-sky-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
                            >
                                Email address
                            </label>
                        </div>
                        <div className="group relative z-0 mb-6 w-full">
                            <input
                                type="text"
                                name="floating_number"
                                id="floating_number"
                                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-sky-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                                placeholder=" "
                                required
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            <label
                                htmlFor="floating_number"
                                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-sky-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
                            >
                                Phone Number
                            </label>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="group relative z-0 mb-6 w-full">
                            <input
                                type="text"
                                name="floating_address"
                                id="floating_address"
                                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-sky-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                                placeholder=" "
                                required
                                onChange={(e) => setAddress(e.target.value)}
                            />
                            <label
                                htmlFor="floating_address"
                                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-sky-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
                            >
                                Complete Address
                            </label>
                        </div>
                        <div className="group relative z-0 mb-6 w-full">
                            <input
                                type="password"
                                name="floating_password"
                                id="floating_password"
                                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-sky-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                                placeholder=" "
                                required
                                onChange={(e) => setPass(e.target.value)}
                            />
                            <label
                                htmlFor="floating_password"
                                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-sky-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
                            >
                                Password
                            </label>
                        </div>
                        <div className="group relative z-0 mb-6 w-full">
                            <input
                                type="password"
                                name="floating_password"
                                id="floating_password"
                                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-sky-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                                placeholder=" "
                                required
                                onChange={(e) => setCPass(e.target.value)}
                            />
                            <label
                                htmlFor="floating_password"
                                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-sky-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
                            >
                                Repeat Password
                            </label>
                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full rounded-lg bg-sky-700 px-5 py-2 text-center text-sm font-medium text-white hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800 sm:w-auto"
                    disabled={!isValid}
                    onClick={submit}
                >
                    Submit
                </button>
                <span className="mt-2 text-center text-xs text-gray-500">
                    Already a Member?, Login{" "}
                    <Link
                        to={"/login"}
                        className="text-sky-400 transition-colors duration-300 hover:text-sky-700"
                    >
                        Here
                    </Link>
                </span>
            </form>
        </div>
    );
};

export default Signup;
