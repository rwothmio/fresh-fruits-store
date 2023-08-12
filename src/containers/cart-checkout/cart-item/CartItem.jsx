import React from "react";
import "./cart-item.css";
import CartButton from "../cart-button/CartButton";
import getFruitById from "../../../utility-functions/getFruitById";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../../components/store/actions";
import { Link } from "react-router-dom";
import { TiDeleteOutline as DeleteIcon } from 'react-icons/ti'

function CartItem({ id, cartItems, handleRemoveItem }) {
  const fruit = getFruitById(id);
  const { name, price, img } = fruit;
  return (
    <div className="cartItem">
      <Link to={`/p/${id}`} className="cartItem__itemInfo">
        <img src={img} alt={name} />
      </Link>
      <div className="cartItem__itemActions">
        <CartButton color='red' fruit={fruit} />
      </div>
      <div className="cartItem__itemTotal">
        <span className="currencyUnit">$</span>{(cartItems[id] * price).toFixed(1)}
      </div>
      
      <button id="removeFromCart" onClick={()=>handleRemoveItem(fruit)}><DeleteIcon /></button>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)
