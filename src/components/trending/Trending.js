import React from "react";
import food1 from "../../assets/images/food2.webp";
import food2 from "../../assets/images/food3.webp";
import food3 from "../../assets/images/food4.webp";
import Card from "../card/Card";
import "./Trending.css";

const Trending = () => {
    return (
        <div className="trending-cont">
            <h2>Trending Products</h2>
            <div className="trending-inner">
                {[
                    {
                        img: food1,
                        title: "Rio Cookies",
                        desc: "Super Crispy,yummy and fresh cookies",
                        price: 120,
                    },
                    {
                        img: food2,
                        title: "Rio Cookies",
                        desc: "Super Crispy,yummy and fresh cookies",
                        price: 120,
                    },
                    {
                        img: food3,
                        title: "Rio Cookies",
                        desc: "Super Crispy,yummy and fresh cookies",
                        price: 120,
                    },
                    {
                        img: food1,
                        title: "Rio Cookies",
                        desc: "Super Crispy,yummy and fresh cookies",
                        price: 120,
                    },
                    {
                        img: food2,
                        title: "Rio Cookies",
                        desc: "Super Crispy,yummy and fresh cookies",
                        price: 120,
                    },
                ].map((obj) => {
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
