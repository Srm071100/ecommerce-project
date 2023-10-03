import { combineReducers } from "redux";
import login from "./login.reducer";
import product from "./product.reducer";

export default combineReducers({
  login,
  product
});
