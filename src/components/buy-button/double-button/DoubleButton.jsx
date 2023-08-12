import React, { useEffect, useRef, useState } from "react";
import "./double-button.css";
import { mapDispatchToProps, mapStateToProps } from "../../store/actions/index";
import { connect } from "react-redux";
import addCartItems from "../../../utility-functions/addObjectValues";
import { BiPlus as AddIcon, BiMinus as MinusIcon } from 'react-icons/bi'


const DoubleButton = ({
  fruit,
  cartItems,
  handleRemove,
  handleAdd,
  handleUpd,
}) => {
  const [inputValue, setInputValue] = useState(addCartItems(cartItems));
  const inputRef = useRef()
  useEffect(() => {
    if (cartItems[fruit.id]) setInputValue(cartItems[fruit.id]);
  }, [cartItems]);
  const handleInputChange = (e) => {
    const newInputValue = e.target.value
    if (isNaN(newInputValue)){
      inputRef.current.style.outline = 'solid red 1px'
    } else {
      inputRef.current.style.outline = 'unset'
      if (newInputValue > 150) setInputValue(150); else setInputValue(newInputValue);
    }

    
    

  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const roundedInput = Math.round(inputValue)
    if (roundedInput <= 150) handleUpd(fruit, roundedInput);
    else handleUpd(fruit, 150);
    
  };
  return (
    <div className="doubleButton">
      <button onClick={() => handleRemove(fruit)}><MinusIcon /></button>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} value={inputValue} onChange={handleInputChange} type="text" />
      </form>
      <button onClick={() => handleAdd(fruit)}><AddIcon /></button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DoubleButton);
