import React from "react";
import "./SideDrawer.css";
import SearchBox from "../UI/SearchBox";
import {
  FaBeer,
  FaSearch,
  FaThumbsUp,
  FaShoppingBag,
  FaLaughWink,
  FaHamburger,
  FaMagic
} from "react-icons/fa";

const SideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <nav className={drawerClasses}>
      <ul className="media">
        <li>
          <div className="search">
            <FaSearch className="icons" />
            <SearchBox searchChange={props.searchChange} />
          </div>
        </li>
        <li>
          <div className="search">
            <FaBeer className="icons" />
            <a href="/masters">Exhibitions & Events</a>
          </div>
        </li>
        <li>
          <div className="search">
            <FaThumbsUp className="icons" />
            <a href="/masters">Artists & Artworks</a>
          </div>
        </li>
        <li>
          <div className="search">
            <FaLaughWink className="icons" />
            <a href="/masters">Collections</a>
          </div>
        </li>
        <li>
          <div className="search">
            <FaHamburger className="icons" />
            <a href="/masters">Plan Your Visit</a>
          </div>
        </li>
        <li>
          <div className="search">
            <FaMagic className="icons" />
            <a href="/masters">Become a Member</a>
          </div>
        </li>
        <li>
          <div className="search">
            <FaShoppingBag className="icons" />
            <a href="/masters">Shop</a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;