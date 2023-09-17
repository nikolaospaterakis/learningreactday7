import React from "react";
import airbnbLogo from "../images/airbnblogo.png"

export default function Header() {
    return(
        <div className="navbar">
            <img
            src={airbnbLogo}
            alt="Logo"
            className="airbnbphoto">
            </img>
        </div>
    )
}