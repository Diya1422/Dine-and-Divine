import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Dine & Divine</div>
      <ul className="nav-links">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/menu">RECIPE</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>
      <div className="search-icon">🔍</div>
    </nav>
  );
}
