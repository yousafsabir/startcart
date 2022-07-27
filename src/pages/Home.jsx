import React from "react";
import AllPd from "../components/AllPd";
import Carousel from "../components/Carousel";
import Catagory from "../components/Catagory";
import Footer from "../components/Footer";
import Navbar from "../components/navbar/Navbar";
import Trending from "../components/Trending";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Carousel />
            <Trending />
            <Catagory />
            <AllPd />
            <Footer />
        </div>
    );
};

export default Home;
