import React from 'react'
import { useRef } from 'react';
import { Command } from "cmdk";
import { Link } from 'react-router-dom';
import './Cmdk.css'
import * as Popover from "@radix-ui/react-popover";
import {
  CubeIcon,
  DownloadIcon,
  EnvelopeClosedIcon,
  LetterCaseCapitalizeIcon,
  Link2Icon,
  MixIcon,
} from "@radix-ui/react-icons";

function CmdK({open , setOpen}) {

  const containerElement = useRef(null)
  return (
    <div className="terminal" ref={containerElement}>
      <Popover.Root
        open={open}
        onOpenChange={setOpen}
        label="Global Command Menu"
      >
        <Popover.Content>
          <Command.Dialog
            open={open}
            onOpenChange={setOpen}
            label="Global Command Menu"
          >
            <Command.Input placeholder="Type a command  or search" />
            <Command.List onClick={() => setOpen(false)}>
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
                  <div className="item">
                    <Link2Icon />
                    <p>Copy Link</p>
                    <p className="cmd">C</p>
                  </div>
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
                  <Link to="/myworks" className="direct">
                    <div className="item">
                      <MixIcon />
                      <p>My Works</p>
                      <p className="cmd">W</p>
                    </div>
                  </Link>
                </Command.Item>
                <Command.Item>
                  <Link to="/products" className="direct">
                    <div className="item">
                      <CubeIcon />
                      <p>Products</p>
                      <p className="cmd">T</p>
                    </div>
                  </Link>
                </Command.Item>
                <Command.Item>
                  <Link to="/about" className="direct">
                    <div className="item">
                      <LetterCaseCapitalizeIcon />
                      <p>About Me</p>
                      <p className="cmd">A</p>
                    </div>
                  </Link>
                </Command.Item>
              </Command.Group>
            </Command.List>
          </Command.Dialog>
        </Popover.Content>
      </Popover.Root>
    </div>
  );
}

export default CmdK