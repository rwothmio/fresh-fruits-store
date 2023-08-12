import React from "react";
import "./cart-container.css";
import CartCheckout from "./CartCheckout";
import { connect } from "react-redux";
import { mapStateToProps } from "../../components/store/actions";
import addObjectValues from "../../utility-functions/addObjectValues";
import SuggestedProducts from "../../components/suggested-products-section/SuggestedProducts";

function CartContainer({ cartItems }) {
  const cartIsEmpty = addObjectValues(cartItems) === 0;

  return (
    <div className="cartContainer">
      {cartIsEmpty ? (
        <>
         <h2 id="emptyCart">--Your cart is empty--</h2>
          <SuggestedProducts count={4} />
        </>
      ) : (
        <CartCheckout />
      )}
    </div>
  );
}

export default connect(mapStateToProps)(CartContainer);
