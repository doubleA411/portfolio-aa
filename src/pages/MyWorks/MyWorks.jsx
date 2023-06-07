import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import GitHubCalendar from "react-github-calendar";
import "./MyWorks.css";
import works from "../../data";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

function MyWorks() {
  return (
    <div className="mywork">
      <Navbar />
      <div className="flex-box">
        <div className="main">
          <p className="page-name">My Works</p>

          <GitHubCalendar
            username="doubleA411"
            year={"last"}
            colorScheme="light"
            hideMonthLabels
            hideTotalCount
            hideColorLegend
          />
          <div className="works">
            <p className="sub"> Some best works</p>
            {works.map((e, i) => {
              return (
                <div className="work">
                  <Link className="work-link" to={e.link}>
                    <p className="title">
                      {e.title} <ArrowRightIcon width={20} height={20} />
                    </p>
                  </Link>
                  <p className="desc">{e.description}</p>
                  <hr />
                </div>
              );
            })}
            <p className="allworks">
              To see all of my works{" "}
              <Link>
                <ArrowRightIcon />
              </Link>
            </p>
          </div>
        </div>
        <div className="hover-comp">
          <p>Drag and drop work to display apllication / hover on works to display application</p>
        </div>
      </div>
    </div>
  );
}

export default MyWorks;
