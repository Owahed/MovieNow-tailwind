import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBaeOne.css";


const NavBarOne = () => {
    const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
    return (
        <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            MovieNow
            <i className="fas fa-code nav-logo-fa"></i>
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
                Movie
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/tvShow"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Tv Show
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="#"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="#"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
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
};

export default NavBarOne;