import React from "react";

export default function Card(props) {
    let badgeText
            if (props.item.openSpots === 0) {
                badgeText = "SOLD OUT"
            } else {
                badgeText = "ONLINE"
            }
    return(
        <card>
            <img
            src={props.item.heroimg}
            alt="card"
            className="katie-img">
            </img>
            <div className="availability">{badgeText}</div>
            <div className="loc">
                <img
                src={props.item.starimg}
                alt="star"
                className="star-img">
                </img>
                <p>{props.item.stats.rating} {props.item.stats.reviewCount} • {props.item.location}</p>
            </div>
            <p>{props.item.title}</p>
            <p><bol>From ${props.item.price}</bol> / person</p>
        </card>
    )
}