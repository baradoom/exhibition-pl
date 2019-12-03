import React, { Component } from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import Signin from "./components/Signin/Signin";
import Masters from "./components/Masters/Masters";
import Preview from "./components/Preview/Preview";
import Styles from "./components/UI/Styles";

class App extends Component {
  state = {
    currentUser: null
  };

 

 
  render() {
    return (
      <div style={{ height: "100%" }}>
        <Switch>
          <Route exact path="/" component={Signin} />
          <Route path="/masters" component={Masters} />
          <Route path="/preview" component={Preview} />
          <Route path="/styles" component={Styles} />
        </Switch>

        <main style={{ marginTop: "70px" }}>
          <p></p>
        </main>
      </div>
    );
  }
}

export default App;
