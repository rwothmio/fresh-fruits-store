import React from "react";
import "./top-products.css";
import TopProduct from "./top-product/TopProduct";
import fruits from "../../assets/fruitsData";

function TopProducts() {
  const { mangoes, apple, oranges } = fruits;
  return (
    <div className="topProducts">
      <div className="topProducts__mostPopular">
        <h2 className="title">Most Popular</h2>
        <div className="topProducts__mostPopular-products">
          <TopProduct fruit={mangoes[0]} />
          <TopProduct fruit={mangoes[1]} />
          <TopProduct fruit={apple[0]} />
        </div>
      </div>
      <div className="topProducts__highestRated">
        <h2 className="title">Highest Rated</h2>
        <div className="topProducts__highestRated-products">
          <TopProduct fruit={oranges[0]} />
          <TopProduct fruit={apple[1]} />
          <TopProduct fruit={oranges[1]} />
        </div>
      </div>
    </div>
  );
}

export default TopProducts;
