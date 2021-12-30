import React from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="logo_Container">
          <div className="logo_icon_container">
            <span className="logo_icon"></span>
          </div>
          <h1 className="logo">Rishi</h1>
        </div>
        <nav className="navbar_items_container">
          <ul className="navbar_items">
            <li className="link">
              <NavLink exact activeClassName="active-class" to="/users">
                Get Users
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
