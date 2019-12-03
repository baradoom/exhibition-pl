import React from "react";
import "./Art-button.scss";
import { withRouter } from "react-router-dom";

const ArtButton = props => (
  <button
    className="custom-button-art"
    onClick={() => props.history.push("/masters")}
  >
    Log In
  </button>
);

export default withRouter(ArtButton);
