import React from "react";
import Card from "./Card";
import heroCard from "../images/katie.jpg"
import starImg from "../images/star.jpg"

export default function Footer() {
    return(
        <div>
        <Card 
            heroimg={heroCard}
            starimg={starImg}
            rating="5.0"
            reviewCount="(6)"
            country="USA"
            title="Life Lessons with Katie Zaferes"
            price="136"/>
        </div>
    )
}