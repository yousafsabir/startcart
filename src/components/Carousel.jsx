import React from "react";
import Pic1 from "../assets/images/abc1.png";
import Pic2 from "../assets/images/abc2.webp";
import Pic3 from "../assets/images/abc3.webp";

const Carousel = () => {
    return (
        <div
            id="carouselExampleCrossfade"
            className="slide carousel carousel-fade relative"
            data-bs-ride="carousel"
        >
            <div className="carousel-indicators absolute right-0 bottom-0 left-0 mb-4 flex justify-center p-0">
                <button
                    type="button"
                    data-bs-target="#carouselExampleCrossfade"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleCrossfade"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleCrossfade"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                ></button>
            </div>
            <div className="carousel-inner relative w-full overflow-hidden md:max-h-[80vh]">
                <div className="active carousel-item float-left w-full">
                    <img
                        src={Pic1}
                        className="block w-full"
                        alt="Wild Landscape"
                    />
                </div>
                <div className="carousel-item float-left w-full">
                    <img src={Pic2} className="block w-full" alt="Camera" />
                </div>
                <div className="carousel-item float-left w-full">
                    <img
                        src={Pic3}
                        className="block w-full"
                        alt="Exotic Fruits"
                    />
                </div>
            </div>
            <button
                className="carousel-control-prev absolute top-0 bottom-0 left-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
                type="button"
                data-bs-target="#carouselExampleCrossfade"
                data-bs-slide="prev"
            >
                <span
                    className="carousel-control-prev-icon inline-block bg-no-repeat"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next absolute top-0 bottom-0 right-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
                type="button"
                data-bs-target="#carouselExampleCrossfade"
                data-bs-slide="next"
            >
                <span
                    className="carousel-control-next-icon inline-block bg-no-repeat"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;
