import React from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/FormInput";
import Button from "../button/Button";

import { signUpStart } from "../../redux/user/user.actions";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./SignUp.scss";

class SignUp extends React.Component {
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

    const { signUpStart } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    signUpStart({ displayName, email, password });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            label="Name"
            value={displayName}
            onChange={this.handleChange}
            required
          ></FormInput>
          <FormInput
            type="text"
            name="email"
            label="Email"
            value={email}
            onChange={this.handleChange}
            required
          ></FormInput>
          <FormInput
            type="password"
            name="password"
            label="Password"
            value={password}
            onChange={this.handleChange}
            required
          ></FormInput>
          <FormInput
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            value={confirmPassword}
            onChange={this.handleChange}
            required
          ></FormInput>
          <Button type="submit">SIGN UP</Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCreds) => dispatch(signUpStart(userCreds)),
});

export default connect(null, mapDispatchToProps)(SignUp);
