import React from "react";
import "./top-product.css";
import getUnit from "../../../utility-functions/getUnit";
import { Link } from "react-router-dom";
import StarRating from "../../star-rating/StarRating";

function TopProduct({ fruit }) {
  const { id, name, img, moq, price, unit } = fruit;
  return (
    <Link to={`/p/${id}`} className="topProduct">
      <div className="topProduct__info">
        <h2>{name}</h2>
        <StarRating fruit={fruit} />
      </div>
      <div id="topProduct">
        <img className="topProduct__image" src={img} alt={name} />
        <div className="topProduct__price">
          <p id="price">
            <span className="currencyUnit">$</span>
            <span>{price}</span> per {unit}
          </p>
          <p id="moq">Min. {`${moq} ${getUnit(moq, unit)}`}</p>
          <button>shop now</button>
        </div>
      </div>
    </Link>
  );
}

export default TopProduct;
