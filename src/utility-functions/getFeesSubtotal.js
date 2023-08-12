//this function returns the sum of the fees for all the items in the cart
import getFruitById from "./getFruitById";

const getFeesSubtotal = (cartItems) => {
  const ids = Object.keys(cartItems);
  let feesSubtotal = 0;
  for (let id of ids) {
    const fruit = getFruitById(id);
    const { price } = fruit;
    const fruitCount = cartItems[id];
    feesSubtotal += price * fruitCount;
  }
  return Number(feesSubtotal.toFixed(1));
};

export default getFeesSubtotal;
