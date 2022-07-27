import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import {
    onSnapshot,
    collection,
    query,
    where,
    limit,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Catagory = () => {
    const navigate = useNavigate();
    const [ctData, setCtData] = useState([]);
    const [catagory, setCatagory] = useState("food");
    useEffect(
        () =>
            onSnapshot(
                query(
                    collection(db, "products"),
                    where("catagory", "==", catagory),
                    limit(5)
                ),
                (snapshot) => {
                    setCtData(
                        snapshot.docs.map((doc) => {
                            return { ...doc.data() };
                        })
                    );
                }
            ),
        [catagory]
    );
    return (
        <div className="mx-auto my-6 max-w-7xl px-4">
            <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center">
                    <h2 className="text-3xl font-semibold">
                        Search By Catagory
                    </h2>
                    <select
                        name=""
                        id=""
                        className="ml-2 rounded px-2 py-1"
                        onChange={(e) => setCatagory(e.target.value)}
                    >
                        <option value="food">Food</option>
                        <option value="electronics">Electronics</option>
                    </select>
                </div>
                <button
                    onClick={() => navigate("/catagory", { state: catagory })}
                    className="rounded bg-gray-300 px-2 py-1 text-gray-700 active:scale-95"
                >
                    see more
                </button>
            </div>
            <div className="grid grid-cols-card gap-4">
                {ctData?.map((doc, i) => {
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

export default Catagory;
