import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, doc, getDoc, onSnapshot } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
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
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="px-1 py-2 text-left text-xl">
                                    Image
                                </th>
                                <th className="px-1 py-2 text-left text-xl">
                                    Title
                                </th>
                                <th className="px-1 py-2 text-left text-xl">
                                    Price
                                </th>
                                <th className="px-1 py-2 text-left text-xl">
                                    Quantity
                                </th>
                                <th className="px-1 py-2 text-left text-xl">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map((doc) => {
                                return (
                                    <tr
                                        className="bg-gray-100 even:bg-gray-200"
                                        key={doc.itemId}
                                    >
                                        <td className="px-1 py-4">
                                            <img
                                                src={doc.img}
                                                alt=""
                                                className="max-h-20"
                                            />
                                        </td>
                                        <td className="overflow-hidden text-ellipsis whitespace-nowrap px-1 py-4 font-semibold">
                                            {doc.title}
                                        </td>
                                        <td className="px-1 py-4 font-semibold">
                                            &#8360;{doc.price * doc.qty}
                                        </td>
                                        <td className="px-1 py-4">{doc.qty}</td>
                                        <td className="space-x-2 px-1 py-4">
                                            <CartCTA document={doc} />
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Cart;
