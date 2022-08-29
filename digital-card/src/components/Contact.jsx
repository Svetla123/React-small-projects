import React from "react";
import twitterLogo from "../assets/twitter.png";
import facebookLogo from "../assets/facebook.png";
import instagramLogo from "../assets/instagram.png";
import gitHubLogo from "../assets/gitHub.png";

export default function Footer () {
    return (
        <div className="contact">
            <a href="https://twitter.com/i/flow/single_sign_on"><img src={twitterLogo} /></a>
            <a href="#"><img src={facebookLogo} /></a>
            <a href="#"><img src={instagramLogo} /></a>
            <a href="#"><img src={gitHubLogo} /></a>
        </div>
    )
}