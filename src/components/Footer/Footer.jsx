import React from "react";
import "./Footer.css";
import slatify from "../../assets/slatify-logo.png";
import planb from "../../assets/plab-logo.png";
function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="products">
          <img src={planb} alt="" />
          <img src={slatify} alt="" />
        </div>
        <div className="links">
          <p>Github</p>
          <p>LinkedIn</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
