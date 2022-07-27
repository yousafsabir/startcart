import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { onSnapshot, collection, query, where } from "firebase/firestore";
import Navbar from "../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Store = () => {
    const location = useLocation();
    let storecode = location.state.storecode;
    let store = location.state.store;
    const [data, setData] = useState([]);
    useEffect(
        () =>
            onSnapshot(
                query(
                    collection(db, "products"),
                    where("storecode", "==", storecode)
                ),
                (snapshot) => {
                    setData(
                        snapshot.docs.map((doc) => {
                            return { ...doc.data() };
                        })
                    );
                }
            ),
        [store]
    );

    return (
        <>
            <Navbar />
            <div className="min-h-[calc(100vh-70px)] w-full">
                <div className="mx-auto my-6 max-w-7xl px-4 pt-9">
                    <div className="mb-3">
                        <h2 className="text-3xl font-semibold">{store}</h2>
                    </div>
                    <div className="grid grid-cols-card gap-4">
                        {data?.map((doc, i) => {
                            return (
                                <div className="flex justify-center" key={i}>
                                    <ProductCard
                                        img={doc.img}
                                        title={doc.title}
                                        desc={doc.desc}
                                        store={doc.store}
                                        price={doc.price}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Store;
