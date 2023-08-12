//this function returns an array of other products in the same category as the argument
import fruits from "../assets/fruitsData.mjs";

const getOtherFruitSuggestions = (currentFruit) => {
    const category = fruits[currentFruit.category];
  
    const otherFruits = [];
    for (let fruitType of category) {
      if (fruitType.id !== currentFruit.id) {
        otherFruits.push(fruitType);
      }
    }
    return otherFruits;
  };

  export default getOtherFruitSuggestions;