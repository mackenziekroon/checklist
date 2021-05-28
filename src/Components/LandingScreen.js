import React from "react";
import { AccountCircle } from "@material-ui/icons";

const LandingScreen = (props) => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();
  today = mm + "/" + dd + "/" + yyyy;
  return (
    <div>
      <div className="nav-bar">
        <div className="account-icon">
          <AccountCircle style={{ color: "white", fontSize: "40px" }} />
        </div>
      </div>
      <div className="landing-container">
        <h1>Today is {today}</h1>
        <div className="goals-container">
          <h2>
            Reminders <button className="add-btn">+</button>
          </h2>
          <p>View All Reminders</p>
        </div>
        <div className="daily-container">
          <h2>
            Daily Goals <button className="add-btn">+</button>
          </h2>
          <p>Drink Water</p>
          <input type="text" />
          oz
          <p>Pilates</p>
          <p>View All Goals</p>
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;
