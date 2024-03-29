import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import {
    onSnapshot,
    collection,
    query,
    where,
    limit,
} from "firebase/firestore";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

const Trending = () => {
    const [noMore, setNoMore] = useState(false);
    const [pdLimit, setPdLimit] = useState(10);
    const [data, setData] = useState([]);
    useEffect(
        () =>
            onSnapshot(
                query(
                    collection(db, "products"),
                    where("trending", "==", true),
                    limit(pdLimit)
                ),
                (snapshot) => {
                    setData(
                        snapshot.docs.map((doc) => {
                            return { ...doc.data() };
                        })
                    );
                }
            ),
        [pdLimit]
    );
    useEffect(() => {
        if (pdLimit > data.length) setNoMore(true);
        if (pdLimit === data.length) setNoMore(false);
    }, [data]);
    const more = () => {
        if (!noMore) setPdLimit((prev) => prev + 10);
    };
    const less = () => {
        if (noMore) setPdLimit((prev) => prev - 10);
    };

    return (
        <>
            <Navbar />
            <div className="min-h-[calc(100vh-70px)] w-full">
                <div className="mx-auto my-6 max-w-7xl px-4 pt-9">
                    <div className="mb-3">
                        <h2 className="text-3xl font-semibold">Trending</h2>
                    </div>

                    <div className="grid grid-cols-card gap-4">
                        {data?.map((doc, i) => {
                            return (
                                <div
                                    className="flex justify-center"
                                    key={doc.id}
                                >
                                    <ProductCard
                                        img={doc.img}
                                        title={doc.title}
                                        desc={doc.desc}
                                        store={doc.store}
                                        price={doc.price}
                                        id={doc.id}
                                    />
                                </div>
                            );
                        })}
                    </div>

                    <div className="my-3 flex items-center justify-center gap-3">
                        {pdLimit > 10 && (
                            <button
                                onClick={less}
                                className="rounded bg-gray-300 px-2 py-1 text-gray-700 active:scale-95"
                            >
                                see less
                            </button>
                        )}
                        {!noMore && (
                            <button
                                onClick={more}
                                className="rounded bg-gray-300 px-2 py-1 text-gray-700 active:scale-95"
                            >
                                see more
                            </button>
                        )}
                    </div>
                    {noMore && (
                        <h3 className="my-3 text-center text-2xl">
                            No more Items to show
                        </h3>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Trending;
