import React from "react";
import "./main.css";
import Home from "../home/Home";
import BuyPage from "../buy-page/BuyPage";
import CartContainer from "../cart-checkout/CartContainer";
import SearchPage from "../search-page/SearchPage";
import About from "../about-page/About";
import { Routes, Route } from 'react-router-dom'

function Main() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/p/:id" element={<BuyPage />}></Route>
        <Route path="/cart" element={<CartContainer />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default Main;
