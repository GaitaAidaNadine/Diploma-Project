import React, { Component } from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-in.styles.scss";
//import { faUser } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleOnChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  handleOnChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <div className="group">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <input
            className="form-input"
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleOnChangeEmail}
            placeholder="Email"
            required
          />
          <input
            className="form-input"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleOnChangePassword}
            placeholder="Password"
            required
          />
          <CustomButton type="submit"> Sign In </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
