import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";
import FatLossPage from "./pages/fatlosspage/fatlosspage.component";
import MuscleBuildingPage from "./pages/musclebuildingpage/musclebuildingpage.component";
import CardioPage from "./pages/cardiopage/cardiopage.component";
import YogaPage from "./pages/yogapage/yogapage.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user-actions";
import ProductDetails from "./components/product-details/product-details.component";
import PilatesPage from "./pages/pilatespage/pilatespage.component";
import CheckoutPage from "./pages/checkoutpage/checkoutpage.component";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    //onAuthStateChanged-> method with open subscription(everytime the user signs-in or signs-out we receive that user's state without requesting it all the time)
    //it is async because we'll make a potential api request to our firestore
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //user signs-in
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        //used this to STORE IN OUR STATE the USER DATA that logged-in from DB
        //onSnapshot -> listen to userRef to any changes to that data
        (await userRef).onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
      //user signs-out
      else {
        setCurrentUser(userAuth);
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
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/fatloss" component={FatLossPage} />
          <Route path="/fatloss/:productId" component={ProductDetails} />
          <Route exact path="/musclebuilding" component={MuscleBuildingPage} />
          <Route path="/musclebuilding/:productId" component={ProductDetails} />
          <Route exact path="/cardio" component={CardioPage} />
          <Route path="/cardio/:productId" component={ProductDetails} />
          <Route exact path="/yoga" component={YogaPage} />
          <Route path="/yoga/:productId" component={ProductDetails} />
          <Route exact path="/pilates" component={PilatesPage} />
          <Route path="/pilates/:productId" component={ProductDetails} />
          <Route exact path="/signin" render={() => this.props.currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage/>} />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
