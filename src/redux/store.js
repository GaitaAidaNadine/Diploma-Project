import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist"; //allows our browser to cache our store
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, applyMiddleware(logger));
const persistedStore = persistStore(store); //persisted version of our store

export { store, persistedStore };
