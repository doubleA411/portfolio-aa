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
  const [open, setOpen] = React.useState(false);

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
          Developing <span>alpha ,beta and gamma </span>
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
      <div className="terminal">
        <Command.Dialog
          open={open}
          onOpenChange={setOpen}
          label="Global Command Menu"
        >
          <Command.Input placeholder="Type a command  or search" />
          <Command.List>
            <Command.Empty>No results found.</Command.Empty>

            <Command.Group heading="HOME">
              <Command.Item>
                <div
                  className="item"
                  onClick={() =>
                    (window.location = "mailto:doublea.py@gmail.com")
                  }
                >
                  <EnvelopeClosedIcon />
                  <p>Send Email</p>
                  <p className="cmd">S</p>
                </div>
              </Command.Item>
              <Command.Separator />

              <Command.Item>
                {" "}
                <div className="item">
                  <Link2Icon />
                  <p>Copy Link</p>
                  <p className="cmd">C</p>
                </div>{" "}
              </Command.Item>
              <Command.Separator />
              <Command.Item>
                {" "}
                <div className="item">
                  <DownloadIcon />
                  <p>Resume</p>
                  <p className="cmd">R</p>
                </div>
              </Command.Item>
            </Command.Group>
            <Command.Group heading="GENERAL">
              <Command.Item>
                <div className="item">
                  <MixIcon />
                  <p>My Works</p>
                  <p className="cmd">W</p>
                </div>
              </Command.Item>
              <Command.Item>
                <div className="item">
                  <CubeIcon />
                  <p>Products</p>
                  <p className="cmd">T</p>
                </div>
              </Command.Item>
              <Command.Item>
                <div className="item">
                  <LetterCaseCapitalizeIcon />
                  <p>About Me</p>
                  <p className="cmd">A</p>
                </div>
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command.Dialog>
      </div>
    </div>
  );
}

export default Hero;
