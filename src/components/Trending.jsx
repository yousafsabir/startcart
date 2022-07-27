import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import {
    onSnapshot,
    collection,
    query,
    where,
    limit,
} from "firebase/firestore";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const Trending = () => {
    const [trdData, setTrdData] = useState([]);
    useEffect(
        () =>
            onSnapshot(
                query(
                    collection(db, "products"),
                    where("trending", "==", true),
                    limit(5)
                ),
                (snapshot) => {
                    setTrdData(
                        snapshot.docs.map((doc) => {
                            return { ...doc.data() };
                        })
                    );
                }
            ),
        []
    );
    return (
        <div className="mx-auto my-6 max-w-7xl px-4">
            <div className="mb-3 flex items-center justify-between">
                <h2 className="text-3xl font-semibold">Trending</h2>
                <Link
                    to={"/"}
                    className="rounded bg-gray-300 px-2 py-1 text-gray-700 active:scale-95"
                >
                    see more
                </Link>
            </div>
            <div className="grid grid-cols-card gap-4">
                {trdData?.map((doc, i) => {
                    return (
                        <div className="flex justify-center" key={i}>
                            <ProductCard
                                img={doc.img}
                                title={doc.title}
                                desc={doc.desc}
                                store={doc.store}
                                price={doc.price}
                                storecode={doc.storecode}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Trending;
