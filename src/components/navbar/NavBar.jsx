import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav_link">
        <NavLink to="/">
        <li className={window.location.pathname === "/" ? " active" : "notActive"}>Accueil</li>
        </NavLink>
        <NavLink to="/about">
        <li className={window.location.pathname === "/about" ? " active" : "notActive"}>A Propos</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default NavBar;
