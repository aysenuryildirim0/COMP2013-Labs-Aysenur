import CardofResorts from "./CardofResorts";
import type {ResortListing} from "../Data/data";

interface resortCards {
    data: ResortListing[];
}

export default function resortContainer ({data}: resortCards){
    return (
        <div className= "resortCards">
        {data.map((list) => (
        <CardofResorts key= {list.id} {...list} />
    ) )}
  </div>
    );
}