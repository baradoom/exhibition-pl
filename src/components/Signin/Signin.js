import React, { Component } from "react";
import FormInput from "../Form-input/Form-input";
import "./Signin.css";
import ArtButton from "../Art-button/Art-button";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="home">
        <img
          alt="hejka"
          className="center"
          src="https://misteryofdarkness.github.io/forjupiter/images/ladies.png"
        />
        <div className="bara">YOUR ART MUSEUM</div>
        <div className="sign-in">
          <h2>
            151 3rd St
            <p>San Francisco, CA 94103</p>
          </h2>

          <form>
            <FormInput
              name="email"
              type="email"
              label="Email address"
              handleChange={this.handleChange}
              value={this.state.email}
            />

            <FormInput
              name="password"
              type="password"
              value={this.state.password}
              handleChange={this.handleChange}
              label="Password"
            />

            <div className="buttons">
              <ArtButton type="submit"></ArtButton>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
