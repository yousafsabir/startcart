import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Card from "../../components/card/Card";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";
import "./Store.css";

const Store = () => {
    const location = useLocation();
    const storeProducts = useSelector((state) =>
        state.product.value.filter((item) => item.store === location.state)
    );
    console.log(storeProducts);
    return (
        <>
            <Navbar />
            <div className="store-p-top"></div>
            <div className="store-cont">
                <h2 className="store-heading">{location.state}</h2>
                <div className="trending-inner">
                    {storeProducts.map((item) => {
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
        </>
    );
};

export default Store;
