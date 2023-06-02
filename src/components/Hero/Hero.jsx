import React, { useState } from "react";
import "./Hero.css";
import { Command } from "cmdk";
import {
  ArrowRightIcon,
  CubeIcon,
  DownloadIcon,
  EnvelopeClosedIcon,
  LetterCaseCapitalizeIcon,
  Link2Icon,
  MixIcon,
} from "@radix-ui/react-icons";

function Hero() {
  const [open, setOpen] = useState(false);

  // Toggle the menu when ⌘K is pressed
  React.useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div className="hero">
      <div className="secondary-hero">
        <p className="name">
          Aakash S <span>aka Minimal Mind</span>
        </p>
        <p className="sub">
          developing <span>alpha ,beta and gamma </span>
        </p>
        <p className="quote">
          // trying to build something new that ultimately turns out to already
          exist. //
        </p>
        <div className="continue" onClick={() => setOpen(!open)}>
          <p>Press</p> <span className="cmdk">ctrl</span>{" "}
          <span className="cmdk">K</span>
          <p>to continue</p> <ArrowRightIcon />
        </div>
      </div>
     
    </div>
  );
}

export default Hero;
