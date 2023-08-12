import React, { useEffect, useState } from "react";
import "./cart-checkout.css";
import CartItem from "./cart-item/CartItem";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../components/store/actions";
import getFeesSubtotal from "../../utility-functions/getFeesSubtotal";
import addObjectValues from "../../utility-functions/addObjectValues";

function CartCheckout({ cartItems, handleEmptyCart }) {
  const [cartFees, setCartFees] = useState({
    subtotal: 0,
    discounts: {},
    tax: 0,
    total: function () {
     return (this.subtotal - addObjectValues(this.discounts) + this.tax);
    },
  });
  useEffect(()=>{
    setCartFees({...cartFees, subtotal: getFeesSubtotal(cartItems)})
  }, [cartItems])
  const cartItemIds = Object.keys(cartItems);
  return (
    <div className="cartCheckout">
      <div className="cartCheckout__cartItems">
        <h2 className='cartCheckout__cartItems-heading'>Your Picks</h2>
        <div className="cartCheckout__cartItems-container">
        {cartItemIds.map((cartItemId) => (
          <CartItem key={cartItemId} id={cartItemId} />
        ))}
        </div>
        <button id="removeAllFromCart" onClick={handleEmptyCart}>remove all</button>
      </div>

      <div className="cartCheckout__cartTotal">
        <table>
          <tr>
            <td>subtotal</td>
            <td><span className="currencyUnit">$</span>{cartFees.subtotal}</td>
          </tr>
          <tr>
            <td>discounts(s)</td>
            <td>{addObjectValues(cartFees.discounts)}</td>
          </tr>
          <tr>
            <td>tax</td>
            <td>{0}</td>
          </tr>
          <tr>
            <td>Total</td>
            <td><span className="currencyUnit">$</span>{cartFees.total()}</td>
          </tr>
        </table>
        <button id="proceedToPayment" onClick={() =>alert('warning!!\nif you pay, you might not get the fruits 😍')}>Proceed To Payment</button>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CartCheckout);
