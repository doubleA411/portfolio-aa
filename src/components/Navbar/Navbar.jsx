import React from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { Command, Terminal } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <img className="logo" src={logo} alt="" />
      </Link>
      <div className="nav-links">
        <Terminal className="terminal" />
      </div>
    </div>
  );
}

export default Navbar;
