import React from "react";
import airbnbLogo from "C:/Users/lsvetlecic/Desktop/React/Airbnb/public/assets/airbnb.png";

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={airbnbLogo} alt="airbnb logo" className="nav--logo" />
        </nav>
    );
}
