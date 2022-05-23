import React from "react";
import Header from "../../components/header/Header";
import Trending from "../../components/trending/Trending";
import AllProducts from "../../components/allProducts/AllProducts";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Trending />
            <AllProducts />
            <Footer />
        </div>
    );
};

export default Home;
