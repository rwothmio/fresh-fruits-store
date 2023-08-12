//action needs the to have type, id, moq
/*
ADD --> an act of increasing the number of one fruit by 1
REM -->            reducing the number of one fruit by 1
UPD -->            updating the number of one fruit to a given input value
REM_ITEM -->       removing one fruit completely
EMPTY_ALL -->        removing all of the fruits in the state
*/
import removeItem from "../helper-functions/removeItem";

const cartItemsReducer = (state = {}, action) => {
  const { type, id, moq } = action;
  const idExists = state.hasOwnProperty(id);
  switch (type) {

    case "ADD": {
      if (idExists && state[id] === 150) return { ...state }; //150 is the maximum number of a fruit that a customer can order
      if (idExists && state[id] >= moq) return { ...state, [id]: state[id] + 1 };
      return { ...state, [id]: moq };
    }

    case "REM": {
      if (!idExists) return { ...state };
      if (state[id] > moq) return { ...state, [id]: state[id] - 1 };
      return removeItem(state, id)
    }

    case "UPD": {
      const newValue = Number(action.newValue);
      if (newValue >= moq) return { ...state, [id]: newValue };
      return { ...state, [id]: moq };
    }

    case "REM_ITEM": return removeItem(state, id);

    case "EMPTY_CART":
      return {};
    default:
      return state;
  }
};
export default cartItemsReducer;
