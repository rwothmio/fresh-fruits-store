import React from "react";
import "./product-listing.css";
import { Link } from "react-router-dom";
import getUnit from "../../utility-functions/getUnit";

function ProductListing({ fruit }) {
  const { id, img, name, price, unit, category, moq } = fruit;
  return (
    <Link to={`/p/${id}`} className="productListing">
      <img src={img} alt={name} />
      <div className="productListing__info">
        <h2> {name}</h2>
        <p id="price">
          <span className="currencyUnit">$</span>
          <span>{price}</span> per {unit}
        </p>
        <p className="moq">
          Min. {moq} {getUnit(moq, unit)}
        </p>
      </div>
    </Link>
  );
}

export default ProductListing;
