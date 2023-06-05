import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import GitHubCalendar from "react-github-calendar";
import './MyWorks.css'
function MyWorks() {
  return (
    <div className="works">
      <Navbar />
      <div className="main">
        <h1>My Works</h1>

        <GitHubCalendar
          username="doubleA411"
          year={"last"}
          colorScheme="light"
          hideMonthLabels
          hideTotalCount
          hideColorLegend
        />
      </div>
    </div>
  );
}

export default MyWorks