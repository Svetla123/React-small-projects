import React from "react";
import trolFace from "../assets/troll-face.png";

export default function Navbar() {
    return (
        <header className="header">
            <img src={trolFace} className="header--image" />
            <h1 className="header--title">Meme Generator</h1>
            <p className="header--project">React Course-Project 3</p>
        </header>
    );
}
