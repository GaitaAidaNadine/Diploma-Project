import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";
import FatLossPage from "./pages/fatlosspage/fatlosspage.component";
import MuscleBuildingPage from './pages/musclebuildingpage/musclebuildingpage.component'
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/fatloss' component={FatLossPage} />
        <Route path='/musclebuilding' component={MuscleBuildingPage} />
      </Switch>
    </div>
  );
}

export default App;
