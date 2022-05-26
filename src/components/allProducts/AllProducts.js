import React from "react";
import { useSelector } from "react-redux";
import Card from "../card/Card";
import "./AllProducts.css";

const AllProducts = () => {
    const products = useSelector((state) => state.product.value);
    return (
        <div className="trending-cont">
            <h2>All Products</h2>
            <div className="trending-inner">
                {products.map((item) => {
                    return (
                        <Card
                            img={item.img}
                            title={item.title}
                            desc={item.desc}
                            price={item.price}
                            store={item.store}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default AllProducts;
