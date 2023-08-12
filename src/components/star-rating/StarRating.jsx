import React from "react";
import "./star-rating.css";
import { AiTwotoneStar as StarIcon } from "react-icons/ai";

function StarRating({ fruit }) {
  const { rating, id } = fruit;
    const stars = new Array(rating).fill(1);
  
  return (
    <div className="starRating">
      {stars.map((star, i) => (
        <StarIcon className="starRating__star" key={i} />
      ))}
    </div>
  );
}

export default StarRating;
