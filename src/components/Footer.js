import React from "react";
import Card from "./Card";
import data from "../data";



export default function Footer() {

        const cards = data.map(item => {
            return (
                <Card 
                    key={item.id}
                    item ={item} />
            )
        })

        return (
            <div className="cards-all">
                {cards}
            </div>
        )
}

/*                    heroimg={item.heroimg}
                    starimg={item.starimg}
                    rating={item.stats.rating}
                    reviewCount={item.stats.reviewCount}
                    country={item.location}
                    title={item.title}
                    price={item.price}
                    openSpots={item.openSpots}/>  

*/