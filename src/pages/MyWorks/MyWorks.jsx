import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import GitHubCalendar from "react-github-calendar";
import './MyWorks.css'
import works from '../../data';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';


function MyWorks() {
  return (
    <div className="mywork">
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
        <div className="works">
          <p className='sub'> Some best works</p>
          {works.map((e, i) => {
            return (
              <div className="work">
                <p className='title'>
                  {e.title}{" "}
                  <Link className='work-link' to={e.link}>
                    <ArrowRightIcon width={20} height={20}/>
                  </Link>
                </p>
                <p className='desc'>{e.description}</p>
                <hr />
              </div>
            );
          })}
          <p className='allworks
          '>To see all of my works <Link><ArrowRightIcon/></Link></p>
        </div>
      </div>
    </div>
  );
}

export default MyWorks