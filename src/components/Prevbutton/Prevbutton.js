import React from "react";
import "./Prevbutton.scss";
import { withRouter } from "react-router-dom";


const Prevbutton = props => (
  <button
    className="custom-button-p"
    onClick={() => props.history.push("/preview")}
  >
   Go Forward !
  </button>
);

export default withRouter(Prevbutton);
