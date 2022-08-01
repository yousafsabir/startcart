import React from "react";

const CartCTA = () => {
    return (
        <div className="flex items-center gap-1">
            <button className="rounded bg-slate-300 px-3 py-1">-</button>
            <button className="rounded bg-slate-300 px-3 py-1">+</button>
            <button className="rounded bg-red-300 px-3 py-1">Remove</button>
        </div>
    );
};

export default CartCTA;
