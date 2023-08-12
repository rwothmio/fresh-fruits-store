import React from "react";
import "./product-item.css";

function ProductItem({ img }) {
  return (
    <div className="productItem">
      <h4>Oranges</h4>
      <img src={img} alt="juice" />
      <p>$ 1.2</p>
    </div>
  );
}

export default ProductItem;
