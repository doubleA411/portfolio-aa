import React, { useState } from "react";
import "./Hero.css";
import logo from "../../assets/logo.png";
import { Command } from "cmdk";
import { NotionLogoIcon } from "@radix-ui/react-icons";

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
      <img src={logo} alt="" />
      <h1>Hey There, I'm Aakash <br />Welcome to my space </h1>
        <Command />
      <h1>Press <span>Ctrl + K</span> to continue</h1>
      <div className="terminal">
        <Command.Dialog
          open={open}
          onOpenChange={setOpen}
          label="Global Command Menu"
        >
          <Command.Input placeholder="What would you like to do?" />
          <Command.List>
            <Command.Empty>No results found.</Command.Empty>

            <Command.Group heading="Projects">
              <Command.Item>
                <div className="item1">
                  <p>Notion</p>
                  <NotionLogoIcon />
                </div>
              </Command.Item>
              <Command.Separator />

              <Command.Item>b</Command.Item>
              <Command.Separator />
              <Command.Item>c</Command.Item>
            </Command.Group>
            <Command.Group heading="Skills">
              <Command.Item>
                <div className="item1">
                  <p>Python</p>
                  <NotionLogoIcon />
                </div>
              </Command.Item>
              <Command.Separator />

              <Command.Item>JavaScript</Command.Item>
              <Command.Separator />
              <Command.Item>c</Command.Item>
            </Command.Group>
            <Command.Group heading="Projects">
              <Command.Item>
                <div className="item1">
                  <p>Notion</p>
                  <NotionLogoIcon />
                </div>
              </Command.Item>
              <Command.Separator />

              <Command.Item>b</Command.Item>
              <Command.Separator />
              <Command.Item>c</Command.Item>
            </Command.Group>
          </Command.List>
        </Command.Dialog>
      </div>
    </div>
  );
}

export default Hero;
