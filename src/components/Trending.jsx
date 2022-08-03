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
import { PuffLoader } from "react-spinners";

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
    if (trdData.length === 0) {
        return (
            <div className="my-4 h-[400px] w-full">
                <div className="mx-auto flex h-full max-w-7xl items-center justify-center rounded-lg bg-gray-100 text-sky-600">
                    <PuffLoader color={"rgb(2 132 199)"} />
                </div>
            </div>
        );
    }
    return (
        <div className="mx-auto my-6 max-w-7xl px-4">
            <div className="mb-3 flex items-center justify-between">
                <h2 className="text-3xl font-semibold">Trending</h2>
                <Link
                    to={"/trending"}
                    className="hidden rounded bg-gray-300  px-2 py-1 text-gray-700 active:scale-95 sm:block"
                >
                    see more
                </Link>
            </div>
            <div className="grid grid-cols-card gap-4">
                {trdData?.map((doc, i) => {
                    return (
                        <div className="flex justify-center" key={doc.id}>
                            <ProductCard
                                img={doc.img}
                                title={doc.title}
                                desc={doc.desc}
                                store={doc.store}
                                price={doc.price}
                                storecode={doc.storecode}
                                id={doc.id}
                            />
                        </div>
                    );
                })}
            </div>
            <div className="mt-2 mb-3 flex justify-center sm:hidden">
                <Link
                    to={"/trending"}
                    className="rounded bg-gray-300 px-2 py-1 text-gray-700 active:scale-95 sm:hidden"
                >
                    see more
                </Link>
            </div>
        </div>
    );
};

export default Trending;
