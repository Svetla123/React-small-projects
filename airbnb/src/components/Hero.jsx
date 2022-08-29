import React from "react";
import groupLogo from "C:/Users/lsvetlecic/Desktop/React/Airbnb/public/assets/group.png";

export default function Hero() {
    return (
        <section className="hero">
            <img src={groupLogo} alt="airbnb logo" className="group--image" />
            <h1 className="hero--header">Online experience</h1>
            <p className="hero--text">
                Join unique interactive activities led by one-of-a-kind host-all
                without leaving home.
            </p>
        </section>
    );
}
