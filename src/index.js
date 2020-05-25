import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"; //component that we want to wrap around the entire app because we want everything inside to have access to the store object that we get from redux 

import "./index.css";
import store from './redux/store'
import App from "./App";

//rendering our application to the DOM
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
