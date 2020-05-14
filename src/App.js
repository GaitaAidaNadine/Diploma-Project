import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";
import FatLossPage from "./pages/fatlosspage/fatlosspage.component";
import MuscleBuildingPage from "./pages/musclebuildingpage/musclebuildingpage.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import ProductDetails from "./components/product-details/product-details.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    //onAuthStateChanged-> method with open subscription(everytime the user signs-in or signs-out we receive that user's state without requesting it all the time)
    //it is async because we'll make a potential api request to our firestore
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //user signs-in
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        //used this to STORE IN OUR STATE the USER DATA that logged-in from DB
        //onSnapshot -> listen to userRef to any changes to that data
        (await userRef).onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });

          console.log(this.state);
        });
      }
      //user signs-out 
      else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    //closing the open subscription when the component will unmount for not causing memory leaks
    this.unsubscribeFromAuth();
  }

  /*when the component path matches the current location in our app, that component will be rendered and 
  a match object will be created as props in the component, for example in our Homepage component*/
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} /> 
          <Route exact path="/fatloss" component={FatLossPage} />
          <Route path="/fatloss/:productId" component={ProductDetails} />
          <Route path="/musclebuilding" component={MuscleBuildingPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
