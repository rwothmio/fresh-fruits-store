//this func searches the fruits db to return the data about the fruit whose id matches a given value
import fruits from "../assets/fruitsData.mjs";

const getFruitById = (id) => {
  const fruitCategories = Object.keys(fruits);
  return getFruit(fruitCategories, id)
};

const getFruit = (fruitCategories, id) => {
  let found;
  fruitCategories.forEach((fruitCategory) => {
    fruits[fruitCategory].forEach((fruit) => {
      if (fruit.id === id) found = fruit;
    });
  });
  return found
};

export default getFruitById;
