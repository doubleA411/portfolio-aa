import React from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { Command, Terminal } from "lucide-react";

function Navbar() {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="" />
      <div className="nav-links">
        <Terminal className="terminal" />
      </div>
    </div>
  );
}

export default Navbar;
