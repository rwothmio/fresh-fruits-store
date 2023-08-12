import { combineReducers } from "redux";
import cartItemsReducer from "./cartItemsReducer";

const rootReducer = combineReducers({ cartItems: cartItemsReducer });

export default rootReducer;
