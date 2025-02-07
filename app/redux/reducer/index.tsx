import { combineReducers } from "redux";
import drawerReducer from "./drawerReducer";
import cartReducer from "./cartReducer";
import wishListReducer from "./wishListReducer";
import checkoutReducer from "./checkoutReducer";
import formValueReducer from "./formValueReducer";

const rootReducer = combineReducers({
  drawer: drawerReducer,
  cart: cartReducer,
  wishList: wishListReducer,
  checkout: checkoutReducer,
  formValue: formValueReducer,
});

export default rootReducer;
