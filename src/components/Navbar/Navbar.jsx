import React from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div>
        <img className="logo" src={logo} alt="" />
      </div>
    </div>
  );
}

export default Navbar;
