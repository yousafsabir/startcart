import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { useSelector } from "react-redux";
import Navbar from "../components/navbar/Navbar";
import CartCTA from "../components/CartCTA";

const Cart = () => {
    const user = useSelector((state) => state.auth.current);
    const [data, setData] = useState([]);
    useEffect(
        () =>
            onSnapshot(
                collection(db, `users/${user?.uid}/cart`),
                (snapshot) => {
                    setData(
                        snapshot.docs.map((doc) => {
                            return { ...doc.data(), itemId: doc.id };
                        })
                    );
                }
            ),
        []
    );
    return (
        <>
            <Navbar />
            <div className="min-h-[calc(100vh-70px)] w-full">
                <div className="mx-auto my-6 max-w-7xl px-4 pt-9">
                    <h2 className="mb-3 text-3xl font-semibold">Cart</h2>
                    <div className="mx-auto max-w-3xl space-y-3">
                        {data?.map((doc) => {
                            return (
                                <div
                                    className="max-w-3xl gap-2 rounded bg-gray-100 p-2 sm:flex sm:items-center sm:gap-6"
                                    key={doc.itemId}
                                >
                                    <div className="flex justify-center sm:block">
                                        <img
                                            src={doc.img}
                                            alt=""
                                            className="max-h-56 sm:max-h-40"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="overflow-hidden text-ellipsis whitespace-nowrap px-1 py-4 font-semibold">
                                            {doc.title}
                                        </h3>
                                        <p>{doc.desc}</p>
                                        <div className="flex items-center justify-between">
                                            <p className="px-1 py-4 font-semibold">
                                                Price: &#8360;
                                                {doc.price * doc.qty}
                                            </p>
                                            <p className="px-1 py-4">
                                                Quantity: {doc.qty}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <CartCTA document={doc} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;
