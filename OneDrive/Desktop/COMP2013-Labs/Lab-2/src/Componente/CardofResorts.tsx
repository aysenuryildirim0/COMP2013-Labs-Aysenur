/**Sources: https://www.geeksforgeeks.org/typescript/explain-the-import-type-statement-in-typescript/ */

import type { ResortListing } from "../Data/data";

export default function CardofResorts ({
 pic,
 country,
 location,
 rating,
 price   
}: ResortListing) {
    return (
        <div className = "cardforRessort">
            <img src = {pic} alt = "pictures of resorts" width="250px"/>
            <h3>{location}</h3>
            <p>{country}</p>
            <p>★ {rating}</p>
            <p>${price}</p>

        </div>
    );

}