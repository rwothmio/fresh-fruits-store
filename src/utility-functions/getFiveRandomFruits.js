/*This function returns an array of data of 5 random fruits, ensuring that the
array doesn't have duplicates */

import getAllFruits from './getAllFruits'

const getFiveRandomFruits = () => {
  const fruits = getAllFruits();
  const randomNumbers = getRandomNums(fruits.length);
  //filter the fruits list to get 5 random ones
  return fruits.filter((fruit, i) => randomNumbers.includes(i));
};

const getRandomNums = (totalNumOfFruits, randomNumbers = []) => {
  if (randomNumbers.length === 5) return randomNumbers;
  const randomNumber = Math.floor(Math.random() * totalNumOfFruits);
  const existsInList = randomNumbers.includes(randomNumber);
  if (!existsInList) randomNumbers.push(randomNumber);
  return getRandomNums(totalNumOfFruits, randomNumbers);
};

export default getFiveRandomFruits;
