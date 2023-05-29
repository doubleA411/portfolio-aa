import React from "react";
import "./Footer.css";
import slatify from "../../assets/slatify-logo.png";
import planb from "../../assets/plab-logo.png";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="products">
          <img src={planb} alt="" />
          <img src={slatify} alt="" />
        </div>
        <div className="links">
          <div className="link">
            <p>github</p>
            <Github className="link-icon" size={18} />
          </div>
          <div className="link">
            <p>linkedIn</p>

            <Linkedin className="link-icon" size={18} />
          </div>
          <div className="link">
            <p>twitter</p>

            <Twitter className="link-icon" size={18} />
          </div>
          <div className="link">
            <p>instagram</p>

            <Instagram className="link-icon" size={18} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
