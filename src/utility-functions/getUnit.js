//This function returns the singular or plural form of a unit depending on the number of the minimum order quntity(moq)

const getUnit = (moq, unit) => {
  if (unit === "kg") return "kg";
  if (moq > 1) return "pieces";
  return "piece";
};

export default getUnit;
