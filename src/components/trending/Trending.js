import React from "react";
import { useSelector } from "react-redux";
import food1 from "../../assets/images/food2.webp";
import food2 from "../../assets/images/food3.webp";
import food3 from "../../assets/images/food4.webp";
import Card from "../card/Card";
import "./Trending.css";

const Trending = () => {
    const trending = useSelector((state) =>
        state.product.value.filter((value) => {
            return value.trending === true;
        })
    );
    return (
        <div className="trending-cont">
            <h2>Trending Products</h2>
            <div className="trending-inner">
                {trending.map((obj) => {
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

export default Trending;
