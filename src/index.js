import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
/*component that we want to wrap around the entire app because we want everything inside to have access to the
store object that we get from redux*/
import { Provider } from "react-redux"; 
import { PersistGate } from "redux-persist/integration/react";
import { store, persistedStore } from "./redux/store";
import "./index.css";
import App from "./App";

//rendering our application to the DOM
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistedStore}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
