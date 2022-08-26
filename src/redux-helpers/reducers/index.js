import { combineReducers } from "redux";
import errorReducer from "./errorReducers";
import cartReducer from './cartReducer'
import filterReducer from "./filterReducer";
export default combineReducers({
  error: errorReducer,
  cart: cartReducer,
  filter: filterReducer
});