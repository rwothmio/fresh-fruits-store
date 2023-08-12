import React from "react";
import "./suggested-products.css";
import ProductListing from "../product-listing/ProductListing";
import getFiveRandomFruits from "../../utility-functions/getFiveRandomFruits";

function SuggestedProducts() {
  const randomFruits = getFiveRandomFruits();

  return (
    <div className="suggestedProducts">
      <h2 id="suggestedProducts__title">Suggested For You</h2>

      <div className="suggestedProducts__products">
        {randomFruits.map((randomFruit) => (
          <ProductListing
            className="product"
            key={randomFruit.id}
            fruit={randomFruit}
          />
        ))}
      </div>
    </div>
  );
}

export default SuggestedProducts;
