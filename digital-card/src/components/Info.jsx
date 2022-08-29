import React from "react";
import profileImage from "../assets/profile.jpg";
import email from "../assets/mail.png";
import linkedin from "../assets/linkedin.png";
export default function Info (){
    return (
        <div className="info">
            <img src = {profileImage} alt = "profile" className = "profile-image" />
            <h1 className="user-name"> Luka Svetlečić</h1>
            <p className="user-position">Beckend developer </p>
            <small className="user-website">www.lsvetleci.com</small>
            <div className="info-bt">
                <button className="email-button">
                    <img src = {email} alt = "email" className = "email" />
                    Email
                </button>
                <button className="linkedin-button">
                    <img src = {linkedin} alt = "linkedin" className = "linkedin" />
                    LinkedIn
                </button>
            </div>
        </div>
    )
}