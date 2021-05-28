import React from "react";

const LandingScreen = (props) => {
  return (
    <div className="landing-container">
      <div className="goals-container">
        <h2>Reminders</h2>
      </div>
      <div className="daily-container">
        <h2>Daily Goals</h2>
        <p>Drink Water</p>
        <input type="text" />
        oz
        <p>Pilates</p>
      </div>
      <div className="add-new-tasks">
        <h2>Add New Goals</h2>
      </div>
    </div>
  );
};

export default LandingScreen;
