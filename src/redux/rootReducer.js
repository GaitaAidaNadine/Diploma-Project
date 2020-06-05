import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
//similar to window.localStorage object
import storage from "redux-persist/lib/storage";
import cartReducer from "./cart/cartReducer";
import userReducer from "./user/userReducer";

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
