import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { increaseQty, decreaseQty, removeItem } from "../redux/slices/Product";

const CartCTA = (props) => {
    const dispatch = useDispatch();
    const increase = () => {
        dispatch(increaseQty(props.document));
    };
    const decrease = () => {
        if (props.document.qty > 1) {
            dispatch(decreaseQty(props.document));
        } else {
            remove();
        }
    };
    const remove = () => {
        if (window.confirm("you wanna remove item from cart?")) {
            dispatch(removeItem(props.document.itemId));
        }
    };
    return (
        <div className="flex items-stretch justify-center gap-1 sm:flex-col">
            <button
                className="rounded bg-slate-300 px-3 py-1"
                onClick={decrease}
            >
                -
            </button>
            <button
                className="rounded bg-slate-300 px-3 py-1"
                onClick={increase}
            >
                +
            </button>
            <button className="rounded bg-red-300 px-3 py-1" onClick={remove}>
                Remove
            </button>
        </div>
    );
};

export default CartCTA;
