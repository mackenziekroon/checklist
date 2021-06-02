import React from "react";
import Navbar from "./Navbar";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import AddNewReminder from "./AddNewReminder";
import { fetchReminder } from "../store/reminder";
import { connect } from "react-redux";
// import Reminder from "../store/reminder";

// let tempReminders = [
//   { id: 1, title: "Prep for interview", completed: false },
//   { id: 2, title: "Finish application essay for Echo Corp", completed: false },
//   { id: 3, title: "Coaching call on Thursday", completed: false },
// ];

class Reminders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      showNewReminder: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.loadReminders();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: !event.target.checked,
    });
  }

  render() {
    const reminders = this.props.reminder;
    console.log("here", reminders);
    return (
      <div>
        <Navbar />
        <div className="reminders-container">
          <h1>
            Reminders <button className="add-new-reminder">+</button>
          </h1>
          {/* {this.state.showNewReminder ? (
            <AddNewReminder />
          ) : (
            <div className="reminders-list">
              {reminders.map((reminder) => (
                <div key={reminder.id}>
                  <FormControlLabel
                    control={<Checkbox checked={this.checked} />}
                    label={reminder.title}
                  />
                </div>
              ))}
            </div>
          )} */}
          <Link to="/reminders/completed">
            <button className="completed-btn">View Completed</button>
          </Link>
          <Link to="/landing">
            <button className="back-btn">Back</button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    reminder: state.reminder,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadReminders: () => dispatch(fetchReminder()),
  };
};

export default connect(mapState, mapDispatch)(Reminders);
