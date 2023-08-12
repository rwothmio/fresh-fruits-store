import React from "react";
import "./product.css";
import ProductItem from "./product-item/ProductItem";

function Product( { img }) {
  return (
    <div className="product">
      <h2>Make Juice</h2>
      <img src={ img } alt="juice" />

      <div className="product__items">
        <ProductItem img={img} />
        <ProductItem img={img} />
        <ProductItem img={img} />
      </div>
    </div>
  );
}

export default Product;
