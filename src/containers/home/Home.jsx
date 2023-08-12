import React from "react";
import "./home.css";
import TopProducts from "../../components/top-products-section/TopProducts";
import SuggestedProducts from "../../components/suggested-products-section/SuggestedProducts";
import Hero from "../../components/hero/Hero";

function Home() {
  return (
    <div className="home">
      <Hero />
      <TopProducts />
      <SuggestedProducts />
    </div>
  );
}

export default Home;
