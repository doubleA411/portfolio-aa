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
          <div
            className="link"
            onClick={() => (window.location = "https://github.com/doubleA411")}
          >
            <p>github</p>
            <Github className="link-icon" size={18} />
          </div>
          <div
            className="link"
            onClick={() =>
              (window.location =
                "https://www.linkedin.com/in/aakash-suresh-5a327b1b6/")
            }
          >
            <p>linkedIn</p>

            <Linkedin className="link-icon" size={18} />
          </div>
          <div
            className="link"
            onClick={() =>
              (window.location = "https://twitter.com/aakashsuresh62")
            }
          >
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
