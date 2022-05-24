import { createSlice } from "@reduxjs/toolkit";

import food1 from "../../assets/images/food2.webp";
import food2 from "../../assets/images/food3.webp";
import food3 from "../../assets/images/food4.webp";
import food4 from "../../assets/images/food5.webp";
import electronic1 from "../../assets/images/electronic1.webp";
import electronic2 from "../../assets/images/electronic2.jpg";
import electronic3 from "../../assets/images/electronic3.jpg";

const initialState = {
    value: [
        {
            store: "peak freans",
            catagory: "food",
            trending: false,
            img: food1,
            title: "Rio Cookies",
            desc: "Super Crispy,yummy and fresh cookies",
            price: 120,
        },
        {
            store: "khan beverages",
            catagory: "food",
            trending: true,
            img: food2,
            title: "Pepsi",
            desc: "Why not meri jaan",
            price: 120,
        },
        {
            store: "khan beverages",
            catagory: "food",
            trending: false,
            img: food3,
            title: "Rio Cookies",
            desc: "Super Crispy,yummy and fresh cookies",
            price: 120,
        },
        {
            store: "khan beverages",
            catagory: "food",
            trending: true,
            img: food4,
            title: "Rio Cookies",
            desc: "Super Crispy,yummy and fresh cookies",
            price: 120,
        },
        {
            store: "Mustafa electronics",
            catagory: "electronics",
            trending: false,
            img: electronic1,
            title: "Rio Cookies",
            desc: "Super Crispy,yummy and fresh cookies",
            price: 120,
        },
        {
            store: "Mustafa electronics",
            catagory: "electronics",
            trending: true,
            img: electronic2,
            title: "Rio Cookies",
            desc: "Super Crispy,yummy and fresh cookies",
            price: 120,
        },
        {
            store: "Mustafa electronics",
            catagory: "electronics",
            trending: false,
            img: electronic3,
            title: "Rio Cookies",
            desc: "Super Crispy,yummy and fresh cookies",
            price: 120,
        },
    ],
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
});

export default productSlice.reducer;
