import React from "react";
import Navbar from "./Navbar";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import AddNewReminder from "./AddNewReminder";
import { fetchReminder } from "../store/reminder";
import { connect } from "react-redux";

class Reminders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      newReminder: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.loadReminders();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: !event.target.checked,
    });
  }

  handleClick() {
    this.setState({
      newReminder: !this.state.newReminder,
    });
  }

  render() {
    const reminders = this.props.reminder || [];
    return (
      <div>
        <Navbar />
        <div className="reminders-container">
          <div className="reminders-title">Reminders</div>
          <button className="add-new-reminder" onClick={this.handleClick}>
            {this.state.newReminder ? "Close" : "Add New Reminder +"}
          </button>
          {this.state.newReminder ? <AddNewReminder /> : null}
          <div className="reminders-list">
            {reminders &&
              reminders.map((reminder) => (
                <div className="single-reminder" key={reminder.id}>
                  <FormControlLabel
                    control={<Checkbox checked={reminder.completed} />}
                    label={reminder.title}
                  />
                </div>
              ))}
          </div>

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
