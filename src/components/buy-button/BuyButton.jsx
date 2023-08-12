import React from "react";
import "./buy-button.css";
import DoubleButton from "./double-button/DoubleButton";
import SingleButton from "./single-button/SingleButton";
import { connect } from "react-redux";
import { mapStateToProps } from "../store/actions";

function BuyButton({ fruit, cartItems }) {
     const fruitExistsInCart = cartItems[fruit.id] >= fruit.moq
  return (
    <div>
        {fruitExistsInCart ? <DoubleButton fruit={fruit} /> : <SingleButton fruit={fruit} />}
    </div>
  );
}

export default connect(mapStateToProps)(BuyButton)
