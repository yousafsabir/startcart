import React from "react";
import food1 from "../../assets/images/food2.webp";
import food2 from "../../assets/images/food3.webp";
import food3 from "../../assets/images/food4.webp";
import food4 from "../../assets/images/food5.webp";
import electronic1 from "../../assets/images/electronic1.webp";
import electronic2 from "../../assets/images/electronic2.jpg";
import electronic3 from "../../assets/images/electronic3.jpg";
import Card from "../card/Card";
import "./AllProducts.css";

const AllProducts = () => {
    return (
        <div className="trending-cont">
            <h2>All Products</h2>
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
                        img: food4,
                        title: "Rio Cookies",
                        desc: "Super Crispy,yummy and fresh cookies",
                        price: 120,
                    },
                    {
                        img: electronic1,
                        title: "Rio Cookies",
                        desc: "Super Crispy,yummy and fresh cookies",
                        price: 120,
                    },
                    {
                        img: electronic2,
                        title: "Rio Cookies",
                        desc: "Super Crispy,yummy and fresh cookies",
                        price: 120,
                    },
                    {
                        img: electronic3,
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

export default AllProducts;
