import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            QuestDo
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/task"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Task
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/settings"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Settings
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
