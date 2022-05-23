import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import abc1 from "../../assets/images/abc1.png";
import abc2 from "../../assets/images/abc2.webp";
import abc3 from "../../assets/images/abc3.webp";
import "./Header.css";

const Header = () => {
    return (
        <div className="header-cont">
            <UncontrolledCarousel
                items={[
                    {
                        key: 1,
                        src: abc1,
                    },
                    {
                        key: 2,
                        src: abc2,
                    },
                    {
                        key: 3,
                        src: abc3,
                    },
                ]}
            />
        </div>
    );
};

export default Header;
