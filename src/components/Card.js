import React from "react";

export default function Card(props) {
    return(
        <card>
            <img
            src={props.heroimg}
            alt="card"
            className="katie-img">
            </img>
            <div className="loc">
                <img
                src={props.starimg}
                alt="star"
                className="star-img">
                </img>
                <p>{props.rating} {props.reviewCount} • {props.country}</p>
            </div>
            <p>{props.title}</p>
            <p><bol>From ${props.price}</bol> / person</p>
        </card>
    )
}