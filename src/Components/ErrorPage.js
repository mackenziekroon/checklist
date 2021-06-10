import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = (props) => {
  return (
    <div className="welcome-container">
      <h1 className="welcome">Oops! This page does not exist!</h1>
      <Link to="/">
        <h5 className="get-started">Start Over</h5>
      </Link>
    </div>
  );
};

export default ErrorPage;
