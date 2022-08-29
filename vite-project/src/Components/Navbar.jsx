import React from "react";
import reactLogo from '../assets/react.svg'

export default function NavBar () {
    return(
        <nav>
            <img src={reactLogo} className="logo" alt="React logo" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course-Project 1</h4>
        </nav>
    )
}