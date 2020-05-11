import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";
import FatLossPage from "./pages/fatlosspage/fatlosspage.component";
import MuscleBuildingPage from './pages/musclebuildingpage/musclebuildingpage.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from "./components/header/header.component";
import { auth } from './firebase/firebase.utils';

class App extends React.Component{
  constructor(){
    super();

    this.state={
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
      //onAuthStateChanged- method with open subscription(everytime the user signs-in or signs-out we receive that user's state without requesting it all the time)
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});

      console.log(user);
    })
  }

  componentWillUnmount(){
      //closing the open subscription when the component will unmount for not causing memory leaks
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/fatloss' component={FatLossPage} />
          <Route exact path='/musclebuilding' component={MuscleBuildingPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
