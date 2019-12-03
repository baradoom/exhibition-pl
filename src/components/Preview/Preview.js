import React from "react";
import "./Preview.scss";
import Toolbar from "../Toolbar/Toolbar";
import SideDrawer from "../SideDrawer/SideDrawer";

const Preview = props => {
  return (
    <div className="contact-main">
      <Toolbar drawerClickHandler={props.drawerClickHandler} />
      <SideDrawer show={props.show} searchChange={props.searchChange} />
      <h1>
        This is still under Construction
      </h1>

      <div className="contact">
      

        <img
          alt="hejka"
          className="center"
          src="https://misteryofdarkness.github.io/forjupiter/images/Active Image.png"
        />
      </div>
    </div>
  );
};

export default Preview;
