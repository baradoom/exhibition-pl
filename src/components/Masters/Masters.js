import React, { Component } from "react";
import "./Masters.scss";
import Toolbar from "../Toolbar/Toolbar";
import SideDrawer from "../SideDrawer/SideDrawer";
import Backdrop from "../Backdrop/Backdrop";
import Mbutton from "../Mbutton/Mbutton";
import { FaBeer, FaMagic } from "react-icons/fa";


class Masters extends Component {
  state = {
    sideDrawerOpen: false,
    searchfield: ""
  };

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="contact-main">
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer searchChange={this.onSearchChange} show={this.state.sideDrawerOpen} />
        {backdrop}
        <div>
          <img
            alt="hejka"
            className="masters"
            src="https://misteryofdarkness.github.io/forjupiter/images/Image Thumbnail.png"
          />
        </div>
        <div className="wystawa">
          <h5 className="exhibit">EXHIBITION</h5>
          <h3 className="nowa">MASTERS OLD AND NEW</h3>
          <h3 className="april">APRIL 15 - SEPTEMER 20</h3>
          <h4 className="exhibit">FLOOR 5</h4>
        </div>
        <div className="buttons">
          <Mbutton type="submit">Plan Your Visit</Mbutton>
        </div>
        <div className="elements">
          <div className="search">
            <FaBeer className="icons" />
            <div>151 St San Francisco, CA 94103</div>
          </div>

          <div className="search">
            <FaMagic className="icons" />
            <div>Open today 10:00am-5:30pm</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Masters;
