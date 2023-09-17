import React from "react";
import heroLogo from "../images/herophoto.jpg"

export default function Main() {
    return(
        <div className="main-hero">
            <img
            alt="hero"
            src={heroLogo}
            className="main-img">
            </img>
            <h1>Online Experiences</h1>
            <h2>Join unique interactive activities led by one-of-a-kind
                hosts-all without leaving home.
            </h2>
        </div>
    )
}