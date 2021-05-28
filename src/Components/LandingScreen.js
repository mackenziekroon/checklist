import React from "react";

const LandingScreen = (props) => {
  return (
    <div className="landing-container">
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
  );
};

export default LandingScreen;
