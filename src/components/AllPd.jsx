import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { onSnapshot, collection, query, limit } from "firebase/firestore";
import ProductCard from "../components/ProductCard";
import { PuffLoader } from "react-spinners";

const AllPd = () => {
    const [noMore, setNoMore] = useState(false);
    const [pdLimit, setPdLimit] = useState(10);
    const [allData, setAllData] = useState([]);
    useEffect(
        () =>
            onSnapshot(
                query(collection(db, "products"), limit(pdLimit)),
                (snapshot) => {
                    setAllData(
                        snapshot.docs.map((doc) => {
                            return { ...doc.data() };
                        })
                    );
                }
            ),
        [pdLimit]
    );

    useEffect(() => {
        if (pdLimit > allData.length) setNoMore(true);
        if (pdLimit === allData.length) setNoMore(false);
    }, [allData]);

    const more = () => {
        if (!noMore) setPdLimit((prev) => prev + 10);
    };
    const less = () => {
        if (noMore) setPdLimit((prev) => prev - 10);
    };

    if (allData.length === 0) {
        return (
            <div className="my-4 h-[400px] w-full">
                <div className="mx-auto flex h-full max-w-7xl items-center justify-center rounded-lg bg-gray-100">
                    <PuffLoader color={"rgb(2 132 199)"} />
                </div>
            </div>
        );
    }

    return (
        <div className="mx-auto my-6 max-w-7xl px-4">
            <div className="mb-3 flex items-center justify-between">
                <h2 className="text-3xl font-semibold">All Products</h2>
            </div>
            <div className="grid grid-cols-card gap-4">
                {allData?.map((doc, i) => {
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
    );
};

export default AllPd;
