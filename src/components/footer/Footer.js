import React from "react";
import Logo from "../../assets/images/logo.png";
import Socials from "../socials/Socials";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-inner">
                <div className="footer-left">
                    <img src={Logo} alt="" />
                    <h1>
                        <span>Start</span> Cart
                    </h1>
                    <div className="footer-left-line"></div>
                    <span>
                        &copy; 2022 -{" "}
                        <span style={{ fontSize: "22px" }}>&#8734;</span>
                    </span>
                    <span>@yousafsabir7</span>
                </div>
                <div className="footer-right">
                    <Socials />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
