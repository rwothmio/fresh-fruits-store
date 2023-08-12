const mapStateToProps = (state) => {
 return { cartItems: state.cartItems }
};

const mapDispatchToProps = (dispatch) => {

  const handleRemove = (fruit) =>
    dispatch({ type: "REM", id: fruit.id, moq: fruit.moq });

  const handleAdd = (fruit) =>
    dispatch({ type: "ADD", id: fruit.id, moq: fruit.moq });

  const handleUpd = (fruit, newValue) =>
    dispatch({ type: "UPD", id: fruit.id, moq: fruit.moq, newValue });

  const handleEmptyCart = () => dispatch({ type: "EMPTY_CART" });

  const handleRemoveItem = (fruit) =>
    dispatch({ type: "REM_ITEM", id: fruit.id });
    
  return {
    handleRemove,
    handleAdd,
    handleUpd,
    handleRemoveItem,
    handleEmptyCart,
  };
};

export { mapDispatchToProps, mapStateToProps };
