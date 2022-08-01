import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAdmins } from "../redux/slices/Auth";
import AllPd from "../components/AllPd";
import Carousel from "../components/Carousel";
import Catagory from "../components/Catagory";
import Footer from "../components/Footer";
import Navbar from "../components/navbar/Navbar";
import Trending from "../components/Trending";

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAdmins());
    }, []);
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
