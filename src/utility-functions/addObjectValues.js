//This function takes an object and returns the sum of all its values

const addObjectValues = (obj) => {
  const objValues = Object.values(obj);
  const reducer = (acc, current) => acc + current;

  //add all the values using array reduce
  const sum = objValues.reduce(reducer, 0);
  return sum;
};

export default addObjectValues;
