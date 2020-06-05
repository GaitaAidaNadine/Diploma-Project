import React from "react";
import "./SignInPage.scss";
import SignUp from "../../components/SignUp/SignUp";
import SignIn from "../../components/SignIn/SignIn";

const SignInPage = () => (
  <div className="sign-in-page">
    <SignUp />
    <SignIn />
  </div>
);
export default SignInPage;
