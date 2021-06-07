import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const LandingScreen = (props) => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();
  today = `${mm}/${dd}/${yyyy}`;
  return (
    <div>
      <Navbar />
      <div className="landing-container">
        <h1 className="today-is">Today is {today}</h1>
        <Link to="/reminders">
          <div className="goals-container">
            <h2>Reminders</h2>
          </div>
        </Link>

        <Link to="/reminders">
          <div className="daily-container">
            <h2>Daily Goals</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LandingScreen;
