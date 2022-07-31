import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast'
import "./ProductCard.css";

const ProductCard = (props) => {
    const isUserPresent = useSelector((state) => state.auth.isPresent);
    const navigate = useNavigate();

    const addToCart = () => {
        if (!isUserPresent) {
            navigate("/login");
            toast("⚠ You need to first login", {
                style: { backgroundColor: "yellow" },
            });
        }
    };
    return (
        <div className="relative my-3 flex h-[375px] w-[250px] flex-col justify-between overflow-visible rounded bg-gray-100 p-3 shadow-card">
            <div>
                <img
                    src={props.img}
                    alt="Product-Image"
                    className="max-h-[200px] w-full rounded transition-transform hover:-translate-y-[15%] hover:scale-125"
                />
                <div className="pt-1">
                    <p className="max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-xl font-bold text-gray-800">
                        {props.title}
                    </p>
                    <p className="productText mb-[10px] text-sm text-gray-700">
                        {props.desc}
                    </p>
                </div>
            </div>
            <div>
                <div>
                    Store:
                    <span
                        className="ml-[5px] cursor-pointer font-semibold"
                        onClick={() =>
                            navigate("/store", {
                                state: {
                                    storecode: props.storecode,
                                    store: props.store,
                                },
                            })
                        }
                    >
                        {props.store}
                    </span>
                </div>
                <div className="flex h-12 items-center justify-between rounded bg-gray-200 p-2">
                    <span className="text-xl font-bold">
                        &#8360;{props.price}
                    </span>
                    <div
                        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-300 transition-all hover:h-10 hover:w-10"
                        onClick={() => addToCart()}
                    >
                        <AiOutlineShoppingCart className="text-xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
