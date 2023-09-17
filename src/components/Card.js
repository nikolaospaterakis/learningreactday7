import React from "react";
import heroCard from "../images/katie.jpg"
import starImg from "../images/star.jpg"

export default function Card() {
    return(
        <card>
            <img
            src={heroCard}
            alt="card"
            className="katie-img">
            </img>
            <div className="loc">
                <img
                src={starImg}
                alt="star"
                className="star-img">
                </img>
                <p>5.0 (6) • USA</p>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><bol>From $136</bol> / person</p>
        </card>
    )
}