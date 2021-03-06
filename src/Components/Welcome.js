import React from "react";
import { Link } from "react-router-dom";

const Welcome = (props) => {
  return (
    <div className="welcome-container">
      <h1 className="welcome">Wecome to DailyCheck!</h1>
      <Link to="/login">
        <button className="get-started-btn">
          <h2 className="get-started">Log In</h2>
        </button>
      </Link>
    </div>
  );
};

export default Welcome;
