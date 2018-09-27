import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
    Art-ster
    </Link>
    <div>
      <ul className="navbar-nav">
        <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/about"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/" className="nav-link">
            About
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/shop"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/details"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/details" className="nav-link">
            Details
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/admin"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/admin" className="nav-link">
            Admin
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
