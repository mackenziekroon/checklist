import React from "react";
import { Link } from "react-router-dom";

const AddNewReminder = (props) => {
  return (
    <div className="show-new-reminder-container">
      <input className="reminder-input" type="text" />

      <Link to="/reminders">
        <button className="create-reminder-btn">Create</button>
      </Link>
    </div>
  );
};

export default AddNewReminder;
