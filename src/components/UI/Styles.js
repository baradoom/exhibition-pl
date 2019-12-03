import React, { Component } from "react";

import { styles } from '../../styles';
import SearchBoxNew from "../UI/SearchBoxNew";
import Toolbar from "../Toolbar/Toolbar";
import SideDrawer from "../SideDrawer/SideDrawer";
import Backdrop from "../Backdrop/Backdrop";
import Prevbutton from "../Prevbutton/Prevbutton";
import "./Styles.css";
import Directory from "../Directory/Directory";



class Styles extends Component {
  state = {
    sideDrawerOpen: false,
    styles: styles,
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
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
         
         <div boxnew>
        < SearchBoxNew searchChange={this.onSearchChange}/>
        
      <Directory />
   </div>


        <div className="buttons">
          <Prevbutton type="submit">Go Ahead!</Prevbutton>
        </div>
        
      </div>
    );
  }
}









export default Styles;