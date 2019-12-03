import React from "react";
import "./Mbutton.scss";
import { withRouter } from "react-router-dom";

const Mbutton = props => (
  <button
    className="custom-button-m"
    onClick={() => props.history.push("/styles")}

  >
    Plan Your Visit
  </button>
);

export default withRouter(Mbutton);
