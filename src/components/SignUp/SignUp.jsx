import React, { Component } from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./SignUp.scss";
import { auth, saveUserDataToDb } from "../../firebase";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Password don't match!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await saveUserDataToDb(user, { displayName });

      //this will clear our form
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleOnChangeName = (event) => {
    this.setState({ displayName: event.target.value });
  };
  handleOnChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  handleOnChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };
  handleOnChangeConfirmedPassword = (event) => {
    this.setState({ confirmPassword: event.target.value });
  };

  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <input
            className="form-input"
            type="text"
            name="displayName"
            value={this.state.displayName}
            onChange={this.handleOnChangeName}
            placeholder="Name"
            required
          />
          <input
            className="form-input"
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleOnChangeEmail}
            placeholder="Email"
            required
          />
          <input
            className="form-input"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleOnChangePassword}
            placeholder="Password"
            required
          />
          <input
            className="form-input"
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            onChange={this.handleOnChangeConfirmedPassword}
            placeholder="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
