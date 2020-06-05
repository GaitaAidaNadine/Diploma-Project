import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import HomePage from "./pages/homepage/HomePage";
import "./App.css";
import FatLossPage from "./pages/fatlosspage/FatLossPage";
import MuscleBuildingPage from "./pages/musclebuildingpage/MuscleBuildingPage";
import CardioPage from "./pages/cardiopage/CardioPage";
import YogaPage from "./pages/yogapage/YogaPage";
import SignInPage from "./pages/signinpage/SignInPage";
import Header from "./components/Header/Header";
import { auth, saveUserDataToDb } from "./firebase";
import {setUser} from "./redux/user/userActions";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import PilatesPage from "./pages/pilatespage/PilatesPage";
import CheckoutPage from "./pages/checkoutpage/CheckoutPage";
import ContactPage from "./pages/contactpage/ContactPage";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setUser } = this.props;
    //onAuthStateChanged-> method with open subscription(everytime the user signs-in or signs-out we receive that user's state without requesting it all the time)
    //it is async because we'll make a potential api request to our firestore
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //user signs-in
      if (userAuth) {
        const userRef = await saveUserDataToDb(userAuth);

        //used this to STORE IN OUR STATE the USER DATA that logged-in from DB
        //onSnapshot -> listen to userRef to any changes to that data
        (await userRef).onSnapshot((snapshot) => {
          setUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
      //user signs-out
      else {
        setUser(userAuth);
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
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.user ? (
                <Redirect to="/" />
              ) : (
                <SignInPage />
              )
            }
          />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/contact" component={ContactPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.user,
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
