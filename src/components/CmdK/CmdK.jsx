import React from 'react'
import { Command } from "cmdk";
import './Cmdk.css'
import {
  CubeIcon,
  DownloadIcon,
  EnvelopeClosedIcon,
  LetterCaseCapitalizeIcon,
  Link2Icon,
  MixIcon,
} from "@radix-ui/react-icons";

function CmdK({open , setOpen}) {
  return (
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
  );
}

export default CmdK