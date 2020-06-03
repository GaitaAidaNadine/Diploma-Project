import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // similar to window.localStorage object
import cartReducer from "./cart/cart-reducer";
import userReducer from "./user/user-reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"], //the only reducer that I want to persist is the cart->cartReducer
};

//actual code that combines all of our states together
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
