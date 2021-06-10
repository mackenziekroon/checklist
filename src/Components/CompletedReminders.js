import React from "react";
import Navbar from "./Navbar";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import { fetchCompletedReminder, destroyReminder } from "../store/reminder";
import { connect } from "react-redux";

// let tempReminders = [
//   { id: 1, title: "Prep for interview", completed: true },
//   { id: 2, title: "Finish application essay for Echo Corp", completed: false },
//   { id: 3, title: "Coaching call on Thursday", completed: true },
// ];

class CompletedReminders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: true,
    };
  }

  componentDidMount() {
    this.props.loadCompletedReminders();
  }

  render() {
    const completedReminders = this.props.completedReminder || [];
    return (
      <div>
        <Navbar />
        <div className="reminders-container">
          <h1>Completed</h1>
          <div className="reminders-list">
            {completedReminders.map((reminder) => (
              <div className="single-reminder" key={reminder.id}>
                <FormControlLabel
                  control={<Checkbox checked={reminder.completed} />}
                  label={reminder.title}
                />
                <button
                  className="delete-reminder"
                  onClick={() => this.props.loadFilteredReminders(reminder.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
          <Link to="/reminders">
            <button className="back-btn">Back</button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    completedReminder: state.reminder,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadCompletedReminders: () => dispatch(fetchCompletedReminder()),
    loadFilteredReminders: (id) => dispatch(destroyReminder(id)),
  };
};

export default connect(mapState, mapDispatch)(CompletedReminders);
