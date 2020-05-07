import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";

const FatLoss = () => (
  <div>
    <h1>FAT LOSS</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/fatloss' component={FatLoss} />
      </Switch>
    </div>
  );
}

export default App;
