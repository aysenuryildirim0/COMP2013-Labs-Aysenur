/**Sources: https://www.geeksforgeeks.org/typescript/explain-the-import-type-statement-in-typescript/ */

import type { ResortListing } from "../Data/data";

export default function CardofResorts ({
 pic,
 country,
 location,
 rating,
 price   
}: ResortListing) {
 
    let ratingPoints;

    if (rating > 4.0)
    {
        ratingPoints = "good-rating";
    } else 
    {
        ratingPoints = "bad-rating";
    }

    return (
        <div className = "cardforResort">
            <img src = {pic} width="250px"/>
            <h3>{country}</h3>
            <p>{location}</p>
            <p className={ratingPoints}>★ {rating}</p>
            <p>${price}/night</p>

        </div>
    );

}
