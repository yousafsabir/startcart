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
                {products.map((obj) => {
                    return (
                        <Card
                            img={obj.img}
                            title={obj.title}
                            desc={obj.desc}
                            price={obj.price}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default AllProducts;
